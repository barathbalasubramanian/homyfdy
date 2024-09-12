import React, { useState, useEffect, useRef } from 'react';
import Noti from './Noti';
import FilterComponent from './FilterComponent';
import PropertyCard from '../../components/PropertyCard';
import { createHouse, getAllHouses } from '../../firebase/house'; // Assume you have a function to get all houses
import FileUpload from './UploadImages';
import { storage } from "../../firebase/firebase";

function Property() {
    const additionalFeaturesList = [
        { name: 'emergencyExit', label: 'Emergency Exit' },
        { name: 'CCTV', label: 'CCTV' },
        { name: 'freeWifi', label: 'Free Wi-Fi' },
        { name: 'airConditioning', label: 'Air Conditioning' },
        { name: 'terrace', label: 'Terrace' },
        { name: 'elevatorLift', label: 'Elevator/Lift' },
    ];

    const [formData, setFormData] = useState({
        propertyType: '',
        region: '',
        propertyPrice: '',
        maxRooms: '',
        bedrooms: '',
        bathrooms: '',
        area: '',
        brochureLink: '',
        manager: '',
        contact: '',
        rankings: '',
        description: '',
        features: '',
        amenities: '',
        address: '',
        addressLink: '',
        imageLinks: [], 
        additionalFeatures: additionalFeaturesList.reduce((acc, feature) => {
            acc[feature.name] = false;
            return acc;
        }, {})
    });

    const [properties, setProperties] = useState([]);
    const [downloadURLs, setDownloadURLs] = useState([]);
    const [selectedFiles, setSelectedFiles] = useState(null);
    const fileInputRef = useRef(null);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const fetchedProperties = await getAllHouses(); // Assume this returns an array of property objects
                setProperties(fetchedProperties);
            } catch (error) {
                console.error("Error fetching properties: ", error);
            }
        };

        fetchProperties();
    }, []);

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            additionalFeatures: {
                ...prevState.additionalFeatures,
                [name]: checked
            }
        }));
    };

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!selectedFiles || selectedFiles.length === 0) {
                console.error("No files selected");
                return;
            }
    
            const uploadedUrls = [];
    
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
    
            await createHouse({ ...formData, imageLinks: uploadedUrls });
            setSelectedFiles(null); 
            fileInputRef.current.value = null;
            alert("Added Successfully!");
        } catch (error) {
            alert("Error adding property: " + error.message);
        }
        handleClear();
    };
    

    const handleClear = () => {
        setFormData({
            propertyType: '',
            region: '',
            propertyPrice: '',
            maxRooms: '',
            bedrooms: '',
            bathrooms: '',
            area: '',
            brochureLink: '',
            manager: '',
            contact: '',
            rankings: '',
            description: '',
            features: '',
            amenities: '',
            address: '',
            addressLink: '',
            imageLinks: [],
            additionalFeatures: {
                emergencyExit: false,
                CCTV: false,
                freeWifi: false,
                airConditioning: false,
                terrace: false,
                elevatorLift: false,
            }
        });
    };

    const [AddPropert, setAddProperty] = useState(false);
    const handleSearch = (filters) => {
        console.log('Keyword:', filters.keyword);
        console.log('Location:', filters.location);
        console.log('Type:', filters.type);
        console.log('Region:', filters.region);
        console.log('Price Range:', filters.priceRange);
        console.log('Area Range:', filters.areaRange);
    };

    return (
        <main className="flex flex-col py-6 px-8 max-md:ml-0 max-md:w-full">
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
                            <div className='text-black font-semibold text-2xl'>
                                Add Property
                            </div>
                            <div className='bg-white p-6 text-black'>
                                <form onSubmit={handleSubmit} className="bg-white p-6 text-black">
                                    <div className="">
                                        <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
                                            <div className='flex flex-col gap-2'>
                                                <label htmlFor="propertyType" className='text-neutral-500'>Property Type</label>
                                                <input  name="propertyType" type="text" value={formData.propertyType} onChange={handleChange} style={{border:"1px solid #E5E5E5"}} className='px-2 py-1 rounded-md outline-none' />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <label htmlFor="region" className='text-neutral-500'>Select Region</label>
                                                <input  name="region" type="text" value={formData.region} onChange={handleChange} style={{border:"1px solid #E5E5E5"}} className='px-2 py-1 rounded-md outline-none' />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <label htmlFor="propertyPrice" className='text-neutral-500'>Property Price</label>
                                                <input  name="propertyPrice" type="number" value={formData.propertyPrice} onChange={handleChange} style={{border:"1px solid #E5E5E5"}} className='px-2 py-1 rounded-md outline-none' />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <label htmlFor="maxRooms" className='text-neutral-500'>Max Rooms</label>
                                                <input  name="maxRooms" type="number" value={formData.maxRooms} onChange={handleChange} style={{border:"1px solid #E5E5E5"}} className='px-2 py-1 rounded-md outline-none' />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <label htmlFor="bedrooms" className='text-neutral-500'>Number of Bedrooms</label>
                                                <input  name="bedrooms" type="number" value={formData.bedrooms} onChange={handleChange} style={{border:"1px solid #E5E5E5"}} className='px-2 py-1 rounded-md outline-none' />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <label htmlFor="bathrooms" className='text-neutral-500'>Number of Bathrooms</label>
                                                <input  name="bathrooms" type="number" value={formData.bathrooms} onChange={handleChange} style={{border:"1px solid #E5E5E5"}} className='px-2 py-1 rounded-md outline-none' />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <label htmlFor="area" className='text-neutral-500'>Area (sq ft)</label>
                                                <input  name="area" type="number" value={formData.area} onChange={handleChange} style={{border:"1px solid #E5E5E5"}} className='px-2 py-1 rounded-md outline-none' />
                                            </div>
                                            {/* <div className='flex flex-col gap-2'>
                                                <label htmlFor="brochureLink" className='text-neutral-500'>Brochure Link</label>
                                                <input  name="brochureLink" type="url" value={formData.brochureLink} onChange={handleChange} style={{border:"1px solid #E5E5E5"}} className='px-2 py-1 rounded-md outline-none' />
                                            </div> */}
                                            <div className='flex flex-col gap-2'>
                                                <label htmlFor="manager" className='text-neutral-500'>Relationship Manager</label>
                                                <input  name="manager" type="text" value={formData.manager} onChange={handleChange} style={{border:"1px solid #E5E5E5"}} className='px-2 py-1 rounded-md outline-none' />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <label htmlFor="contact" className='text-neutral-500'>Contact Number</label>
                                                <input  name="contact" type="tel" value={formData.contact} onChange={handleChange} style={{border:"1px solid #E5E5E5"}} className='px-2 py-1 rounded-md outline-none' />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <label htmlFor="rankings" className='text-neutral-500'>Total Rankings</label>
                                                <input  name="rankings" type="number" value={formData.rankings} onChange={handleChange} style={{border:"1px solid #E5E5E5"}} className='px-2 py-1 rounded-md outline-none' />
                                            </div>
                                        </div>
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
                                            <input  name="address" type="text" value={formData.address} onChange={handleChange} style={{border:"1px solid #E5E5E5"}} className='px-2 py-1 rounded-md outline-none' />
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <label htmlFor="addressLink" className='text-neutral-500'>Address Link (Google Maps)</label>
                                            <input  name="addressLink" type="text" value={formData.addressLink} onChange={handleChange} style={{border:"1px solid #E5E5E5"}} className='px-2 py-1 rounded-md outline-none' />
                                        </div>
                                    </div>
                                    <div>
                                        <FileUpload 
                                            downloadURLs={downloadURLs}
                                            setDownloadURLs={setDownloadURLs}
                                            selectedFiles={selectedFiles}
                                            setSelectedFiles={setSelectedFiles}
                                            fileInputRef={fileInputRef}
                                        />
                                    </div>
                                    {/* <div className='pt-8 flex flex-col gap-2'>
                                        <div className='text-neutral-500'>
                                        Additional Features
                                        </div>
                                        <div className='flex flex-wrap gap-4 pt-1'>
                                        {additionalFeaturesList.map((feature) => (
                                            <label key={feature.name} className='flex items-center'>
                                            <input
                                                type="checkbox"
                                                name={feature.name}
                                                checked={formData.additionalFeatures[feature.name]}
                                                onChange={handleCheckboxChange}
                                                className='mr-2 text-neutral-600'
                                            />
                                            {feature.label}
                                            </label>
                                        ))}
                                        </div>
                                    </div> */}
                                    <div className="mt-8 flex gap-4">
                                        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">Submit</button>
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
                                {properties.map((property) => (
                                    <PropertyCard key={property.id} property={property} verbose={true} />
                                ))}
                            </div>
                        </>
                    }
                </div>
            </div>
        </main>
    )
}

export default Property;
