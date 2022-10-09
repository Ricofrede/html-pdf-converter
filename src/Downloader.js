import { useEffect, useState } from 'react';
import Html from 'react-pdf-html';
import { Document, Page } from '@react-pdf/renderer'

export default function Downloader() {
    const [html, setHtml] = useState('')

    useEffect(() => {
        window.downloadPdf = downloadPdf
    }, [])

    function downloadPdf(htmlString) {
        if (htmlString) {
            setHtml(htmlString)
        }
    }
    

    return (
        <>
            <Document>
                <Page>
                    <Html>{html}</Html>
                </Page>
            </Document>
        </>
    )
}
