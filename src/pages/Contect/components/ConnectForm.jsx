import Cookies from 'js-cookie';
import React, { useState } from 'react';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormTextArea from './FormTextArea';
import Button from './Button';
import { createEnquiry } from '../../../firebase/enquiries';
import { useLocation } from 'react-router-dom';
import { getUserDetails } from '../../../firebase/user.js';

const ConnectForm = () => {
    const [phone, setPhone] = useState('');
    const [inquiryType, setInquiryType] = useState('');
    const [hearAbout, setHearAbout] = useState('');
    const [message, setMessage] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const location = useLocation();
    const { propertyType } = location.state || {};

    const inquiryTypes = ['Select Inquiry Type', 'General Inquiry', 'Property Listing', 'Buying', 'Selling'];
    const hearAboutUs = ['Select', 'Friend', 'Social Media', 'Advertisement', 'Other'];

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isChecked) {
            console.log({
                phone,
                inquiryType,
                hearAbout,
                message,
                SelectedProperty: propertyType
            });
            const name = Cookies.get("name")
            const email = Cookies.get("email")
            const id = await getUserDetails(name,email);
            await createEnquiry({
                id:id,
                phone,
                inquiryType,
                hearAbout,
                message,
                SelectedProperty: propertyType
            });
        } else {
            alert('Please agree to the terms and conditions.');
        }
    };

    return (
        propertyType ? (
            <form 
                onSubmit={handleSubmit} 
                className="flex flex-col justify-center p-20 mt-24 w-full rounded-xl border border-solid border-neutral-800 max-md:px-5 max-md:mt-10 max-md:max-w-full"
            >
                <div className="flex flex-col w-full max-md:max-w-full">
                    <div className="flex flex-wrap gap-8 items-start w-full max-md:max-w-full">
                        <FormInput
                            label="Phone"
                            placeholder="Enter Phone Number"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <FormSelect
                            label="Inquiry Type"
                            options={inquiryTypes}
                            value={inquiryType}
                            onChange={(e) => setInquiryType(e.target.value)}
                        />
                        <FormSelect
                            label="How Did You Hear About Us?"
                            options={hearAboutUs}
                            value={hearAbout}
                            onChange={(e) => setHearAbout(e.target.value)}
                        />
                    </div>
                    <FormTextArea
                        label="Message"
                        placeholder="Enter your Message here.."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <div className="flex flex-wrap gap-10 justify-center items-center mt-8 w-full font-medium max-md:max-w-full">
                    <div className="flex w-full items-center justify-between text-neutral-400 max-md:max-w-full max-md:flex-col max-md:items-start max-md:gap-12">
                        <div className='flex gap-1 items-center'>
                            <label className="shrink-0 self-stretch my-auto w-6 h-6 rounded-full border border-solid bg-zinc-900 border-neutral-800">
                                <input 
                                    type="checkbox" 
                                    className="hidden peer" 
                                    checked={isChecked} 
                                    onChange={handleCheckboxChange} 
                                />
                                <span className="peer-checked:bg-green-600 w-full h-full rounded-full block"></span>
                            </label>
                            <label htmlFor="terms" className="pl-2 flex-1 shrink self-stretch my-auto underline basis-0 max-md:max-w-full">
                                I agree with Terms of Use Privacy Policy
                            </label>
                        </div>
                        <div>
                            <Button text="Let's Connect" />
                        </div>
                    </div>
                </div>
            </form>
        ) : (
            <div>No property data available</div>
        )
    );
};

export default ConnectForm;
