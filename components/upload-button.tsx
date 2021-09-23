import React from 'react'

const UploadButton = () => (
    <div className="field">
        <input name = "photo" type="file" />

        <style jsx>{`
            .field .error {
                border-bottom: 1px solid #ff0000;
            }
        `}</style>
    </div>
)

export default UploadButton