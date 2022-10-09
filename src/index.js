import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import Downloader from './Downloader';

const App = () => (
  <PDFViewer>
    <Downloader />
  </PDFViewer>
);

ReactDOM.render(<App />, document.getElementById('pdf-page-viewer'));