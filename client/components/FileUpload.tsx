import React, { useRef, ReactNode } from 'react'

interface FileUploadProps {
    setFile: Function 
    accept: string
    children: ReactNode
}

const FileUpload: React.FC<FileUploadProps> = ({setFile, accept, children}) => {
    const ref:any = useRef<HTMLInputElement>()
    const onChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setFile(e.target.files)
    }
    return (
        <div onClick={()=> ref.current?.click()}>
            <input type="file" accept={accept} style={{display: 'none'}} ref={ref} onChange={onChange}/>

            {children}
        </div>
    )
}

export default FileUpload