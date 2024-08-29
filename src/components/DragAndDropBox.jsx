import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const DragAndDropBox = () => {
    const [file, setFile] = useState(null);

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setFile(Object.assign(file, {
            preview: URL.createObjectURL(file)
        }));
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div className="flex items-center space-x-4 mt-[-50px] mb-16">
            <div className="w-24 h-24 bg-stone-800 rounded-md flex justify-center items-center">
                {file ? (
                    <img
                        src={file.preview}
                        alt="Preview"
                        className="object-cover rounded-md"
                        style={{ width: '100%', height: '100%' }}
                    />
                ) : (
                    <p className="text-slate-200v text-center font-normal">Profile Picture</p>
                )}
            </div>

            <div
                {...getRootProps()}
                className="w-full h-24 border-2 border-dashed border-stone-700 bg-stone-900 rounded-md flex flex-col justify-center items-center cursor-pointer hover:bg-stone-800"
            >
                <input {...getInputProps()} />
                <p className="text-slate-200">
                    <strong>Click to upload</strong> or drag and drop
                </p>
                <p className="text-slate-500 text-sm">PNG, JPG or JPEG (Max. 1mb)</p>
            </div>
        </div>
    );
};

export default DragAndDropBox;
