import React, { useState, useEffect, useRef } from 'react';
import Noti from './Noti';
import { createManager, getAllManagers, updateManager, deleteManager } from '../../firebase/RelationshipManagers';
import { storage } from '../../firebase/firebase';

function RelationshipManagers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [managerName, setManagerName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [relationType, setRelationType] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [managers, setManagers] = useState([]);
  const [editingManagerId, setEditingManagerId] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSave = async () => {
    try {
      let managerImage = '';

      if (selectedFile) {
        const storageRef = storage.ref();
        const uploadTask = storageRef.child(`images/${selectedFile.name}`).put(selectedFile);

        managerImage = await new Promise((resolve, reject) => {
          uploadTask.on(
            'state_changed',
            null,
            (error) => reject(error),
            async () => {
              const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
              resolve(downloadURL);
            }
          );
        });
      } else if (editingManagerId) {
        const managerToEdit = managers.find((manager) => manager.id === editingManagerId);
        managerImage = managerToEdit.managerImage || '';
      }

      if (editingManagerId) {
        await updateManager(editingManagerId, {
          managerName,
          contactInfo,
          relationType,
          managerImage,
        });
      } else {
        await createManager({
          managerName,
          contactInfo,
          relationType,
          managerImage,
        });
      }

      fetchManagers();
      setIsModalOpen(false);
      handleClear();
    } catch (error) {
      console.error('Error saving manager:', error);
    }
  };

  const handleClear = () => {
    setManagerName('');
    setContactInfo('');
    setRelationType('');
    setSelectedFile(null);
    setEditingManagerId(null);
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const fetchManagers = async () => {
    try {
      const fetchedManagers = await getAllManagers();
      setManagers(fetchedManagers);
    } catch (error) {
      console.error('Error fetching managers:', error);
    }
  };

  const handleEdit = (id) => {
    const managerToEdit = managers.find((manager) => manager.id === id);
    setManagerName(managerToEdit.managerName);
    setContactInfo(managerToEdit.contactInfo);
    setRelationType(managerToEdit.relationType);
    setSelectedFile(null);
    setEditingManagerId(id);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteManager(id);
      fetchManagers();
    } catch (error) {
      console.error('Error deleting manager:', error);
    }
  };

  useEffect(() => {
    fetchManagers();
  }, []);

  return (
    <main className="flex flex-col py-6 px-8 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col gap-8 w-full max-md:mr-2.5 max-md:max-w-full">
          <div className='flex items-center justify-between max-md:flex-col max-md:items-start gap-4'>
            <div className="flex overflow-hidden flex-wrap gap-2 items-center px-3 w-1/2 max-md:w-[90%] text-xs leading-6 text-center text-gray-400 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid min-h-[40px] max-md:max-w-full">
              <input type="text" placeholder="Search..." className="gap-0 self-stretch my-auto bg-transparent border-none focus:outline-none" aria-label="Search" />
            </div>
            <div>
              <Noti />
            </div>
          </div>
          <div className='w-full flex items-center justify-between'>
            <div className='text-black font-semibold text-2xl'>
              Relationship Managers
            </div>
            <div className="bg-green-500 text-white px-4 py-2 rounded-lg cursor-pointer" onClick={() => setIsModalOpen(true)}>
              Add Manager
            </div>
          </div>

          <div className="p-6 text-black">
            <div className="flex w-full bg-green-100 p-4 font-bold text-[16px]">
              <div className="w-1/4">Manager Name</div>
              <div className="w-1/4">Contact Info</div>
              <div className="w-1/4">Relation Type</div>
              <div className='w-[3.5em]'>Image</div>
              <div className="w-1/4"></div>
            </div>
            {managers.map((manager) => (
              <div key={manager.id} className="flex items-center w-full p-4 border-b border-gray-200">
                <div className="w-1/4">{manager.managerName}</div>
                <div className="w-1/4">{manager.contactInfo}</div>
                <div className="w-1/4">{manager.relationType}</div>
                <div className='w-[3.5em]'>
                  <img src={manager.managerImage} alt={manager.managerName} className="w-12 h-12 object-cover rounded-full" />
                </div>
                <div className="w-1/4 flex justify-center gap-4">
                  <button onClick={() => handleEdit(manager.id)} className="bg-green-500 text-white px-4 py-2 rounded-lg">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(manager.id)} className="text-white rounded-lg">
                    <img src="/assets/delete.svg" alt="Delete" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg max-w-lg w-full">
                <div className='w-full flex items-center justify-between mb-6'>
                  <div className="text-xl font-semibold text-black">{editingManagerId ? 'Update Manager' : 'Add Manager'}</div>
                  <div className='font-bold text-xl text-red-500 cursor-pointer' onClick={() => setIsModalOpen(false)}>
                    <img src='/assets/close.svg' alt='Close' />
                  </div>
                </div>
                <div className='flex flex-col gap-4'>
                  <div>
                    <label className="block text-gray-700">Manager Name</label>
                    <input
                      type="text"
                      value={managerName}
                      onChange={(e) => setManagerName(e.target.value)}
                      className="w-full text-neutral-700 outline-none mt-1 px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Contact Info</label>
                    <input
                      type="text"
                      value={contactInfo}
                      onChange={(e) => setContactInfo(e.target.value)}
                      className="w-full text-neutral-700 outline-none mt-1 px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Relation Type</label>
                    <input
                      type="text"
                      value={relationType}
                      onChange={(e) => setRelationType(e.target.value)}
                      className="w-full text-neutral-700 outline-none mt-1 px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Upload Image</label>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <div className='flex flex-col gap-2 w-full items-center border py-4 mt-3 rounded-xl px-3 border-gray-300 cursor-pointer' onClick={triggerFileInput}>
                      <img src="assets/upload.svg" style={{ width: "4em" }} alt="Upload Image" />
                      <div className='text-neutral-500'>
                        {selectedFile ? selectedFile.name : 'Upload image'}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end gap-4">
                    <button onClick={handleClear} className="bg-gray-300 text-black px-4 py-2 rounded-lg">
                      Clear
                    </button>
                    <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded-lg">
                      {editingManagerId ? 'Update' : 'Add'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default RelationshipManagers;
