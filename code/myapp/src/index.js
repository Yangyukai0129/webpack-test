import React from 'react';
import { ReactDOM } from 'react';
import { createRoot } from 'react-dom/client'

// createRoot(document.getElementById('root')).render(<div>234</div>);

import App from './03-hooks/02-todolist'

createRoot(document.getElementById('root')).render(<App></App>)

// react18里面已经弃用了ReactDOM.render,不过浏览器依旧能正常运行ReactDOM.render，react18里用下面方法构建dom。
// import {createRoot} from "react-dom/client";

// const container=document.getElementById("root")
// const root=createRoot(container)
// root.render(<Element></Element>)
// jsx == js + xml
