import React, { useState, useEffect, useRef } from 'react';
import Select from 'react-select'
import Noti from './Noti';
import FilterComponent from './FilterComponent';
import PropertyCard from '../../components/PropertyCard';
import { createHouse, deleteHouse, getAllHouses, updateHouse } from '../../firebase/house'
import FileUpload from './UploadImages';
import { storage } from "../../firebase/firebase";

function Property({managers}) {

    const options = [
        { value: 'HomyfydReliable', label: 'Homyfyd Reliable' },
        { value: 'HotProjects', label: 'Hot Projects' },
        { value: 'NewlyLaunched', label: 'Newly Launched' }
    ]
    const managerNames = managers.map(manager => manager.managerName); 
    const additionalFeaturesList = [
        { name: 'emergencyExit', label: 'Emergency Exit' },
        { name: 'CCTV', label: 'CCTV' },
        { name: 'freeWifi', label: 'Free Wi-Fi' },
        { name: 'airConditioning', label: 'Air Conditioning' },
        { name: 'terrace', label: 'Terrace' },
        { name: 'elevatorLift', label: 'Elevator/Lift' },
    ];
    const [AddPropert, setAddProperty] = useState(false);
    const [loading, setLoading] = useState(true);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [del, setDel] = useState(null)
    const [editable, setEdit] = useState(null)
    const [properties, setProperties] = useState([]);
    const [downloadURLs, setDownloadURLs] = useState([]);
    const [selectedFiles, setSelectedFiles] = useState(null);
    const fileInputRef = useRef(null)
    const fileInputRef1 = useRef(null);
    const fileInputRef2 = useRef(null);
    const fileInputRef3 = useRef(null);
    const [selectedFile_PDF, setSelectedFile_PDF] = useState(null);
    const [selectedFile_Main, setSelectedFile_Main] = useState(null);
    const [selectedFile_Floor, setSelectedFile_Floor] = useState(null);
    const [editingProperty, SeteditingProperty] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [formData, setFormData] = useState({
        propertyName: '',
        propertyBHK: '',
        propertyType: '',
        buildYear: '',
        region: '',
        propertyPrice: '',
        maxRooms: '',
        bedrooms: '',
        bathrooms: '',
        area: '',
        manager: '',
        contact: '',
        rankings: '',
        description: '',
        features: '',
        address: '',
        addressLink: '',
        MainImage: '',
        FloorImage: '',
        propertyReliable: [],
        imageLinks: [], 
        brochurelink: '',
        additionalFeatures: additionalFeaturesList.reduce((acc, feature) => {
            acc[feature.name] = false;
            return acc;
        }, {})
    });

    const handleChange_Mult = (selectedOptions) => {
        setSelectedOptions(selectedOptions);
        console.log("Selected options:", selectedOptions);
        setFormData((prevData) => ({
            ...prevData,
            ["propertyReliable"]: selectedOptions,
          }));
        console.log(formData)
    }
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData(prevState => ({
                ...prevState,
                additionalFeatures: {
                    ...prevState.additionalFeatures,
                    [name]: checked
                }
            }));
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };
    const handleImageUpload3 = async (event) => {
        const selectedFile_PDF_ = event.target.files[0];
        setSelectedFile_PDF(event.target.files[0])
        if (!selectedFile_PDF_ || selectedFile_PDF_.type !== "application/pdf") {
          alert("Please upload a valid PDF file.");
          return;
        }
    };

    const fetchProperties = async () => {
        try {
            setLoading(true)
            const fetchedProperties = await getAllHouses();
            setProperties(fetchedProperties);
            setFilteredProperties(fetchedProperties); 
            setLoading(false)
        } catch (error) {
            console.error("Error fetching properties: ", error);
        }
    };
    const handleSubmit = async (e) => {
        setLoading(true)
        let MainImage = '';
        let FloorImage = '';
        let PdfLink = '';
        e.preventDefault();
        try {
            console.log(editable)
            if (!selectedFile_Main || !selectedFile_Floor || !selectedFiles || !selectedFile_PDF) {
                if (!editable) {
                    alert("Files Field Required"); 
                    setLoading(false)
                    return 
                }
            }
            console.log(selectedFile_PDF)
            if (selectedFile_PDF) {
                try {
                    const storageRef = storage.ref()
                    const uploadTask = storageRef.child(`pdf/${selectedFile_PDF.name}`).put(selectedFile_PDF)
                    await new Promise((resolve, reject) => {
                      uploadTask.on(
                        'state_changed',
                        null,
                        (error) => reject(error),
                        async () => {
                          const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
                          console.log("PDF available at:", downloadURL);
                          PdfLink = downloadURL
                          resolve(); 
                        }
                      );
                });
                } catch (error) {
                    console.error("Error uploading PDF: ", error);
                }
            }
            if (selectedFile_Main) {
                const storageRef = storage.ref();
                    const uploadTask = storageRef.child(`images/${selectedFile_Main.name}`).put(selectedFile_Main);
                    await new Promise((resolve, reject) => {
                        uploadTask.on(
                            'state_changed',
                            null,
                            (error) => reject(error),
                            async () => {
                                const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
                                MainImage = downloadURL                                    
                                resolve();
                            }
                        );
                    });
            } else { MainImage = editingProperty.MainImage;console.log("When Editing Main Image Not Selected ..") }
            if (selectedFile_Floor) {
                    const storageRef = storage.ref();
                    const uploadTask = storageRef.child(`images/${selectedFile_Floor.name}`).put(selectedFile_Floor);
                    await new Promise((resolve, reject) => {
                        uploadTask.on(
                            'state_changed',
                            null,
                            (error) => reject(error),
                            async () => {
                                const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
                                FloorImage = downloadURL
                                resolve();
                            }
                        );
                    }); 
            } else { FloorImage = editingProperty.FloorImage;console.log("When Editing Floor Image Not Selected ..") }
            if (!selectedFiles || selectedFiles.length === 0) {
                if (!editable) {
                    alert("Select Property Images")
                    return
                }
                try {

                    console.log(PdfLink)
                    await updateHouse(editable ,{ ...formData, FloorImage:FloorImage, MainImage:MainImage, brochurelink:PdfLink });
                    alert("Updated Successfully")
                    setSelectedFile_Floor(null)
                    setSelectedFile_Main(null)
                    fetchProperties()
                    setLoading(false)
                    setAddProperty(false)
                    ;setEdit(null)
                    fileInputRef.current.value = null;
                    fileInputRef1.current.value = null;
                    fileInputRef2.current.value = null;
                    fileInputRef3.current.value = null;
                    return
                } catch (error) {
                    setLoading(false)
                }
            }

            const uploadedUrls = []
            for (const file of selectedFiles) {
                if (!file) continue;
    
                try {
                    const storageRef = storage.ref();
                    const uploadTask = storageRef.child(`images/${file.name}`).put(file);
    
                    await new Promise((resolve, reject) => {
                        uploadTask.on(
                            'state_changed',
                            null,
                            (error) => reject(error),
                            async () => {
                                const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
                                uploadedUrls.push(downloadURL); // Add to array
                                resolve();
                            }
                        );
                    });
                } catch (error) {
                    console.error("Error uploading file:", error);
                }
            }
            setFormData((prevData) => ({
                ...prevData,
                imageLinks: uploadedUrls,
            }));

            if (editable) {
                try {
                    await updateHouse(editable ,{ ...formData, imageLinks: uploadedUrls  });
                    alert("Updated Successfully")
                    setSelectedFile_Floor(null)
                    setSelectedFile_Main(null)
                    fetchProperties()
                    setLoading(false)
                    setAddProperty(false)
                    setEdit(null)
                    fileInputRef.current.value = null;
                    fileInputRef1.current.value = null;
                    fileInputRef2.current.value = null;
                    fileInputRef3.current.value = null;
                    return
                } catch (error) {
                    setLoading(false)
                    return;
                }
            } 

            await createHouse({ ...formData, imageLinks: uploadedUrls, FloorImage:FloorImage, MainImage:MainImage, brochurelink:PdfLink });
            setSelectedFiles(null); 
            fetchProperties()
            alert("Added Successfully!");
            setSelectedFile_Floor(null)
            setSelectedFile_Main(null)
            setAddProperty(false);setEdit(null)
            setLoading(false)
            fileInputRef.current.value = null;
            fileInputRef1.current.value = null;
            fileInputRef2.current.value = null;
            fileInputRef3.current.value = null;
        } catch (error) {
            // alert("Error adding property: " + error.message);
        }
        handleClear();
        // setAddProperty(false)
    };
    const handleClear = () => {
        setFormData({
            propertyName: '',
            propertyBHK: '',
            propertyType: '',
            buildYear: '',
            region: '',
            propertyPrice: '',
            maxRooms: '',
            bedrooms: '',
            bathrooms: '',
            area: '',
            manager: '',
            contact: '',
            rankings: '',
            description: '',
            features: '',
            address: '',
            addressLink: '',
            MainImage: '',
            FloorImage: '',
            imageLinks: [],
            propertyReliable: [],
            brochurelink: '',
            additionalFeatures: {
                emergencyExit: false,
                CCTV: false,
                freeWifi: false,
                airConditioning: false,
                terrace: false,
                elevatorLift: false,
            }
        });
        setSelectedOptions([])
    }
    const handleImageUpload1 = (e) => {
        setSelectedFile_Main(e.target.files[0]);
    };
    const handleImageUpload2 = (e) => {
        setSelectedFile_Floor(e.target.files[0]);
    };
    const triggerFileInput1 = () => {
        fileInputRef1.current.click();
    };
    const triggerFileInput2 = () => {
        fileInputRef2.current.click();
    };
    const triggerFileInput3 = () => {
        fileInputRef3.current.click();
    };

    const matchPriceRange = (price, range) => {
        console.log(price, range)
        if (range === "0-100k") return price <= 100000;
        if (range === "100k-500k") return price > 100000 && price <= 500000;
        if (range === "500k-1M") return price > 500000 && price <= 1000000;
        if (range === "1M+") return price > 1000000;
        return true;
    };
    const handleSearch = (filters) => {
        console.log('PropertyName:', filters.keyword);
        console.log('Region:', filters.region);
        console.log('Type:', filters.type);
        console.log('BHK Type:', filters.BHKType);
        console.log('Price Range:', filters.propertyPrice);
        let filtered = properties;
        setFilteredProperties(filtered)

        if (filters.keyword !== "") {
            console.log("F",filters.keyword)
            filtered = filtered.filter((property) =>
              property.propertyName.toLowerCase().includes(filters.keyword.toLowerCase())
            );
            setFilteredProperties(filtered)
        }
        if (filters.region !== "") {
            console.log("F", filters.region);
            filtered = filtered.filter((property) => {
                const formattedRegion = property.region.toLowerCase().replace(/\s+/g, '');
                const formattedFilterRegion = filters.region.toLowerCase().replace(/\s+/g, '');
                console.log(formattedRegion, formattedFilterRegion);
                return formattedRegion.includes(formattedFilterRegion);
            });
            setFilteredProperties(filtered);
        }
        if (filters.type !== "") {
            console.log("F",filters.type)
            filtered = filtered.filter((property) =>
              property.propertyType.toLowerCase().includes(filters.type.toLowerCase())
            );
            setFilteredProperties(filtered)
        }
        if (filters.BHKType !== "") {
            console.log("F",filters.BHKType)
            filtered = filtered.filter((property) =>
            //   console.log(property.propertyBHK.toLowerCase(),filters.BHKType.toLowerCase())
              property.propertyBHK.toLowerCase().includes(filters.BHKType.toLowerCase())
            );
            setFilteredProperties(filtered)
        }
        if (filters.propertyPrice !== "") {
            console.log("F",filters.propertyPrice)
            filtered = filtered.filter((property) =>
                matchPriceRange(property.propertyPrice, filters.propertyPrice)
            );
            setFilteredProperties(filtered)
          }
    };

    useEffect(() => {
        
        if (editable) {
            const PropertyToedit = properties.find((property) => property.id === editable);
            SeteditingProperty(PropertyToedit)
            setAddProperty(true)
            if (PropertyToedit) {
                setSelectedOptions(PropertyToedit.propertyReliable)
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    propertyName: PropertyToedit.propertyName || '',
                    propertyBHK: PropertyToedit.propertyBHK || '',
                    propertyType: PropertyToedit.propertyType || '',
                    region: PropertyToedit.region || '',
                    propertyPrice: PropertyToedit.propertyPrice || '',
                    maxRooms: PropertyToedit.maxRooms || '',
                    bedrooms: PropertyToedit.bedrooms || '',
                    bathrooms: PropertyToedit.bathrooms || '',
                    area: PropertyToedit.area || '',
                    manager: PropertyToedit.manager || '',
                    contact: PropertyToedit.contact || '',
                    rankings: PropertyToedit.rankings || '',
                    description: PropertyToedit.description || '',
                    features: PropertyToedit.features || '',
                    address: PropertyToedit.address || '',
                    addressLink: PropertyToedit.addressLink || '',
                    imageLinks: PropertyToedit.imageLinks || [],
                    buildYear: PropertyToedit.buildYear || '',
                    brochurelink: PropertyToedit.brochurelink || '',
                    propertyReliable: Array.isArray(PropertyToedit.propertyReliable) ? PropertyToedit.propertyReliable: [],
                    additionalFeatures: {
                        ...prevFormData.additionalFeatures,
                        ...Object.keys(prevFormData.additionalFeatures).reduce((acc, featureName) => {
                            acc[featureName] = PropertyToedit.additionalFeatures?.[featureName] || false;
                            return acc;
                        }, {})
                    }
                }));
            }
        }
        else {
            handleClear()
        }
    }, [editable]);
    useEffect ( ()=>{
        deleteHouse(del)
        fetchProperties()
    },[del])
    useEffect(() => {
        fetchProperties();
    }, []);

    return (
        <main className="flex flex-col py-6 px-8 max-md:ml-0 max-md:w-full">
            {
            !loading ? 
            <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col gap-8 w-full max-md:mr-2.5 max-md:max-w-full">
                    <div className='flex items-center justify-between max-md:flex-col max-md:items-start gap-4'>
                        <div className="flex overflow-hidden flex-wrap gap-2 items-center px-3 w-1/2 max-md:w-[90%] text-xs leading-6 text-center text-gray-400 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid min-h-[40px] max-md:max-w-full">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/51a0430ee58a1c70a8bd7129382b322477b4e868f6106bd719ff31411841b3ec?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757" alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
                            <input  type="text" placeholder="Search..." className="gap-0 self-stretch my-auto bg-transparent border-none focus:outline-none" aria-label="Search" />
                        </div>
                        <div>
                            <Noti />
                        </div>
                    </div>

                    {AddPropert ? 
                        <>
                            <div className='flex items-center justify-between w-full'>
                                <div className='text-black font-semibold text-2xl'>
                                    {
                                        editable ? "Edit Property" : "Add Property"
                                    }
                                </div>
                                <div className='text-black cursor-pointer hover:scale-110' onClick={()=>{setAddProperty(false);setEdit(null)}}>Back</div>
                            </div>
                            <div className='bg-white p-6 text-black'>
                                <form onSubmit={handleSubmit} className="bg-white p-6 text-black">
                                    <div className="">
                                        <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
                                            <div className='flex flex-col gap-2'>
                                                <label htmlFor="propertyName" className='text-neutral-500'>Property Name</label>
                                                <input required name="propertyName" type="text" value={formData.propertyName} onChange={handleChange} style={{border:"1px solid #E5E5E5"}} className='px-2 py-1 rounded-md outline-none' />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <label htmlFor="propertyType" className='text-neutral-500'>Property Type</label>
                                                <select
                                                    name="propertyType"
                                                    value={formData.propertyType}
                                                    onChange={handleChange}
                                                    style={{ border: "1px solid #E5E5E5" }}
                                                    className='px-2 py-1 rounded-md outline-none'
                                                >
                                                    <option value="">Select Property Type</option>
                                                    <option value="Apartments">Apartments</option>
                                                    <option value="Plots">Plots</option>
                                                    <option value="Villas">Villas</option>
                                                </select>
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <label htmlFor="propertyBHK" className='text-neutral-500'>Property BHK</label>
                                                <select
                                                    name="propertyBHK"
                                                    value={formData.propertyBHK}
                                                    onChange={handleChange}
                                                    style={{ border: "1px solid #E5E5E5" }}
                                                    className='px-2 py-1 rounded-md outline-none'
                                                >
                                                    <option value="">Select BHK</option>
                                                    <option value="BHK2">BHK2</option>
                                                    <option value="BHK4">BHK4</option>
                                                    <option value="BHK6">BHK6</option>
                                                </select>
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <label htmlFor="region" className='text-neutral-500'>Select Region</label>
                                                <select
                                                    name="region"
                                                    value={formData.region}
                                                    onChange={handleChange}
                                                    style={{ border: "1px solid #E5E5E5" }}
                                                    className='px-2 py-1 rounded-md outline-none'
                                                >
                                                    <option value="">Select Location</option>
                                                    <option value="bangalorenorth">Bangalore North</option>
                                                    <option value="bangaloresouth">Bangalore South</option>
                                                    <option value="bangalorewest">Bangalore West</option>
                                                    <option value="bangaloreeast">Bangalore East</option>
                                                </select>
                                            </div>
                                            {/* <div className='flex flex-col gap-2'>
                                                <label htmlFor="region" className='text-neutral-500'>Select Region</label>
                                                <input required name="region" type="text" value={formData.region} onChange={handleChange} style={{border:"1px solid #E5E5E5"}} className='px-2 py-1 rounded-md outline-none' />
                                            </div> */}
                                            <div className='flex flex-col gap-2'>
                                                <label htmlFor="propertyPrice" className='text-neutral-500'>Property Price</label>
                                                <input required name="propertyPrice" type="number" value={formData.propertyPrice} onChange={handleChange} style={{border:"1px solid #E5E5E5"}} className='px-2 py-1 rounded-md outline-none' />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <label htmlFor="buildYear" className='text-neutral-500'>Build Year</label>
                                                <input required name="buildYear" type="number" value={formData.buildYear} onChange={handleChange} style={{border:"1px solid #E5E5E5"}} className='px-2 py-1 rounded-md outline-none' />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <label htmlFor="maxRooms" className='text-neutral-500'>Max Rooms</label>
                                                <input required name="maxRooms" type="number" value={formData.maxRooms} onChange={handleChange} style={{border:"1px solid #E5E5E5"}} className='px-2 py-1 rounded-md outline-none' />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <label htmlFor="bedrooms" className='text-neutral-500'>Number of Bedrooms</label>
                                                <input required name="bedrooms" type="number" value={formData.bedrooms} onChange={handleChange} style={{border:"1px solid #E5E5E5"}} className='px-2 py-1 rounded-md outline-none' />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <label htmlFor="bathrooms" className='text-neutral-500'>Number of Bathrooms</label>
                                                <input required name="bathrooms" type="number" value={formData.bathrooms} onChange={handleChange} style={{border:"1px solid #E5E5E5"}} className='px-2 py-1 rounded-md outline-none' />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <label htmlFor="area" className='text-neutral-500'>Area (sq ft)</label>
                                                <input required name="area" type="number" value={formData.area} onChange={handleChange} style={{border:"1px solid #E5E5E5"}} className='px-2 py-1 rounded-md outline-none' />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <label htmlFor="manager" className='text-neutral-500'>Relationship Manager</label>
                                                <select
                                                    required
                                                    name="manager"
                                                    value={formData.manager}
                                                    onChange={handleChange}
                                                    style={{border:"1px solid #E5E5E5"}}
                                                    className='px-2 py-1 rounded-md outline-none'
                                                >
                                                    <option value="">Select a manager</option>
                                                    {managerNames.map((managerName) => (
                                                    <option key={managerName} value={managerName}>
                                                        {managerName}
                                                    </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <label htmlFor="contact" className='text-neutral-500'>Contact Number</label>
                                                <input required name="contact" type="tel" value={formData.contact} onChange={handleChange} style={{border:"1px solid #E5E5E5"}} className='px-2 py-1 rounded-md outline-none' />
                                            </div>
                                            {/* <div className='flex flex-col gap-2'>
                                                <label htmlFor="propertyReliable" className='text-neutral-500'>Property Reliable</label>
                                                <select
                                                    multiple
                                                    name="propertyReliable"
                                                    value={formData.propertyReliable}
                                                    onChange={handleChange}
                                                    style={{ border: "1px solid #E5E5E5" }}
                                                    className='px-2 py-1 rounded-md outline-none'
                                                >
                                                    <option value="">Select Reliability</option>
                                                    <option value="Homyfyd Reliable">Homyfyd Reliable</option>
                                                    <option value="Hot Projects">Hot Projects</option>
                                                    <option value="Newly Launched">Newly Launched</option>
                                                </select>
                                            </div> */}
                                            <div className='flex flex-col gap-2'>
                                                <label htmlFor="rankings" className='text-neutral-500'>Total Rankings</label>
                                                <input required name="rankings" type="number" value={formData.rankings} onChange={handleChange} style={{border:"1px solid #E5E5E5"}} className='px-2 py-1 rounded-md outline-none' />
                                            </div>
                                            <div className=''>
                                                <label className="block text-neutral-500 pb-2">Brochure Pdf</label>
                                                <input
                                                    type="file"
                                                    ref={fileInputRef3}
                                                    // accept=".pdf"  
                                                    onChange={handleImageUpload3}
                                                    className="hidden"
                                                />
                                                <div className='flex gap-2 w-full justify-between items-center border py-1 rounded-sm px-3 border-gray-300 cursor-pointer' onClick={triggerFileInput3}>
                                                    <div className='text-neutral-500 text-sm'>
                                                        {selectedFile_PDF ? selectedFile_PDF.name : 'Upload PDF'}
                                                    </div>
                                                    <img src="assets/upload.svg" style={{ width: "1em" }} alt="Upload PDF" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='min-w-fit'>
                                                <div className='pb-2'>Select Reliability</div>
                                                <Select
                                                    options={options}
                                                    isMulti
                                                    value={selectedOptions}
                                                    onChange={handleChange_Mult}
                                                />
                                    </div>
                                    <div className='pt-2 grid grid-cols-1 gap-4 lg:grid-cols-2'>
                                        <div className='flex flex-col gap-2'>
                                            <label htmlFor="description" className='text-neutral-500'>Description</label>
                                            <textarea name="description" value={formData.description} onChange={handleChange} style={{border:"1px solid #E5E5E5"}} className='px-2 py-1 rounded-md outline-none'></textarea>
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <label htmlFor="features" className='text-neutral-500'>Key Features and Amenities</label>
                                            <textarea name="features" value={formData.features} onChange={handleChange} style={{border:"1px solid #E5E5E5"}} className='px-2 py-1 rounded-md outline-none'></textarea>
                                        </div>
                                    </div>
                                    <div className='pt-2 grid grid-cols-1 gap-4 lg:grid-cols-2'>
                                        <div className='flex flex-col gap-2'>
                                            <label htmlFor="address" className='text-neutral-500'>Address</label>
                                            <input required name="address" type="text" value={formData.address} onChange={handleChange} style={{border:"1px solid #E5E5E5"}} className='px-2 py-1 rounded-md outline-none' />
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <label htmlFor="addressLink" className='text-neutral-500'>Address Link (Google Maps)</label>
                                            <input required name="addressLink" type="text" value={formData.addressLink} onChange={handleChange} style={{border:"1px solid #E5E5E5"}} className='px-2 py-1 rounded-md outline-none' />
                                        </div>
                                    </div>
                                    <div className='py-4'>
                                        <FileUpload 
                                            downloadURLs={downloadURLs}
                                            setDownloadURLs={setDownloadURLs}
                                            selectedFiles={selectedFiles}
                                            setSelectedFiles={setSelectedFiles}
                                            fileInputRef={fileInputRef}
                                        />
                                    </div>
                                    <div className='pt-4'>
                                        <input
                                        type="file"
                                        ref={fileInputRef1}
                                        onChange={handleImageUpload1}
                                        className="hidden"
                                        />
                                        <div className='flex flex-col gap-2 w-full items-center border py-4 mt-3 rounded-xl px-3 border-gray-300 cursor-pointer' onClick={triggerFileInput1}>
                                        <img src="assets/upload.svg" style={{ width: "4em" }} alt="Upload Image" />
                                        <div className='text-neutral-500'>
                                            {selectedFile_Main ? selectedFile_Main.name : 'Upload image'}
                                        </div>
                                        </div>
                                        <label className="block text-gray-700">Main Image</label>
                                    </div>
                                    <div>
                                        <input
                                        type="file"
                                        ref={fileInputRef2}
                                        onChange={handleImageUpload2}
                                        className="hidden"
                                        />
                                        <div className='flex flex-col gap-2 w-full items-center border py-4 mt-3 rounded-xl px-3 border-gray-300 cursor-pointer' onClick={triggerFileInput2}>
                                        <img src="assets/upload.svg" style={{ width: "4em" }} alt="Upload Image" />
                                        <div className='text-neutral-500'>
                                            {selectedFile_Floor ? selectedFile_Floor.name : 'Upload image'}
                                        </div>
                                        </div>
                                        <label className="block text-gray-700">Floor Image</label>
                                    </div>
                                    <div className="mt-8 flex gap-4">
                                        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">
                                            {
                                                editable ? "Update Property" : "Add Property"
                                            }
                                        </button>
                                        <button type="button" onClick={handleClear} className="border text-neutral-900 px-4 py-2 rounded-md">Clear</button>
                                    </div>
                                </form>
                            </div>
                        </> : 
                        <>
                            <div className='flex w-full items-center justify-between'>
                                <div><div className='text-black font-semibold text-2xl'>Add Property</div></div>
                                <div><button onClick={() => setAddProperty(true)} className="self-end px-14 py-1 text-base text-white whitespace-nowrap bg-emerald-500 rounded-lg border border-solid border-emerald-500 border-opacity-80 shadow-[0px_2px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10">Add Property</button></div>
                            </div>
                            <FilterComponent onSearch={handleSearch} />
                            <div className='flex flex-wrap w-full gap-4'>
                                {filteredProperties.map((property) => (
                                    <PropertyCard key={property.id} property={property} verbose={true} edit={true} setEdit={setEdit} setDel={setDel}/>
                                ))}
                            </div>
                        </>
                    }
                </div>
            </div> 
            : 
            <div className="flex justify-center items-center h-96">
                <div className="loader text-green-500">Loading...</div> {/* Custom loader component or CSS spinner */}
            </div>
            }
        </main>
    )
}

export default Property;

