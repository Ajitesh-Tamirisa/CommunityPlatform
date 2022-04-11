import React, {useRef, useState} from 'react'
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CreateIcon from '@mui/icons-material/Create';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import Typography from '@mui/material/Typography';
import { UploadFileOutlined } from '@mui/icons-material';

function Popup(props) {
    const { openPopup, setOpenPopup} = props;
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [link, setLink] = useState('');
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("No file chosen");
    const questionRef = useRef();

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };
    const handleBodyChange = (event) => {
        setBody(event.target.value);
    };
    const handleLinkChange = (event) => {
        setLink(event.target.value);
    };
    const handleClose = () => {
        setOpenPopup(false);
    };
    const handleImageChange = (event)=> {
        console.log(event.target.files[0])
        if(event.target.files[0]){
            setFile(event.target.files[0]);
            console.log(file);
            setFileName(event.target.files[0].name);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setOpenPopup(false);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        var raw = JSON.stringify({"title": title, "body":body, "link": link, "file": file});
        console.log(raw);
        
        
        setLink('');
        setFile(null);
        setFileName('No file choses')
        setTitle('');
        setBody('');
      };
    return (
        <Dialog open={openPopup} fullWidth={true}>
            <DialogTitle>
                <div style={{display:'flex', alignItems:'center'}}><CreateIcon/>Create Post</div>
            </DialogTitle>
            <form onSubmit={handleSubmit}>
            <DialogContent dividers>
                <TextField
                margin="dense"
                id="title"
                label="Title"
                required
                fullWidth
                variant="outlined"
                multiline={true}
                rows={2}
                value={title}
                onChange={handleTitleChange}
            />
            <TextField
                margin="dense"
                id="body"
                label="Body"
                fullWidth
                variant="outlined"
                multiline={true}
                rows={5}
                value={body}
                onChange={handleBodyChange}
            />
            <TextField
                margin="dense"
                id="link"
                label="Related Link"
                required
                fullWidth
                variant="outlined"
                value={link}
                onChange={handleLinkChange}
            />
            <div style={{display:'flex', alignItems:'center', margin: '10px 0px'}}>
                <Button
                    variant="contained"
                    component="label"
                    startIcon={<UploadFileOutlined />}
                >
                    Upload File
                    <input
                        id="fileInput"
                        type="file"
                        onChange={handleImageChange}
                        hidden
                    />
                </Button>
                <span id='fileName' style={{marginLeft:'8px'}}>{fileName}</span>
            </div>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="secondary">
                Cancel
            </Button>
            <Button type="submit" color="secondary">
                Post
            </Button>
            </DialogActions>
        </form>
      </Dialog>
    )
}

export default Popup