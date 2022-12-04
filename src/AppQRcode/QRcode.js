import QRCode from 'qrcode'
import { useState } from 'react'
import './QRcode.css';


function QRcode() {
	const [url, setUrl] = useState('')
	const [qr, setQr] = useState('')

	const GenerateQRCode = () => {
		QRCode.toDataURL(url, {
			width: 800,
			margin: 2,
			color: {
				dark:'#000000',
				light: '#EEEEEEFF'
			}
		}, (err, url) => {
			if (err) return console.error(err)

			console.log(url)
			setQr(url)
		})
	}

	return (
		<div className="app">
			<h1>QR-<span>Generator</span></h1>
			<div>
			<input 
				type="text"
				placeholder="URL to QRcode"
				value={url}
				onChange={e => setUrl(e.target.value)} />
				
			<button type="button" class="btn btn-dark" onClick={GenerateQRCode}>Generate</button>
			</div>
			{qr && <>
				<img   src={qr} />
				<a href={qr} download="qrcode.png" style={{color:'black',fontSize:'20px'}}>Download</a>
			</>}
		</div>
	)
}

export default QRcode;