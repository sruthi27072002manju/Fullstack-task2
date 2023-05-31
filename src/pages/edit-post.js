import React, {useCallback} from 'react';

import ReactQuill from 'react-quill';
import {Input} from 'antd';

export default function EditPost (props) {

    const getDelta = useCallback((value, delta, source, editor) => {
        console.log({value,delta,source,editor,Input})
    }, [])

    return (
        <main className="post-editor">
            <ReactQuill onChange={getDelta} style={{height: '60vh'}}/>
        </main>
    )
}