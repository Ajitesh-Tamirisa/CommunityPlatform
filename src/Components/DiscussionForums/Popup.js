import React, {useRef, useState} from 'react'
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';




function Popup(props) {
    const { openPopup, setOpenPopup} = props;
    // const [open, setOpen] = useState(false);
    const [branch, setBranch] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    // const branchRef = useRef(null);
    // const titleRef = useRef(null);
    // const bodyRef = useRef(null);

    const handleBranchChange = (event) => {
        setBranch(event.target.value);
    };
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };
    const handleBodyChange = (event) => {
        setBody(event.target.value);
    };
    const handleClose = () => {
        setOpenPopup(false);
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        setOpenPopup(false);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        var raw = JSON.stringify({"branch": branch, "title": title, "body":body});
        console.log(raw);
        
        
        setBranch('');
        setTitle('');
        setBody('');
      };
    return (
        <Dialog open={openPopup} fullWidth={true}>
            <DialogTitle>
                <div>Create Post</div>
            </DialogTitle>
            <form onSubmit={handleSubmit}>
            <DialogContent dividers>
                <FormControl
                    sx={{  width: '100%' }} required>
                <InputLabel id="demo-simple-select-required-label">Branch</InputLabel>
                    <Select
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    value={branch}
                    variant="outlined"
                    // inputRef={branchRef}
                    fullWidth
                    onChange={handleBranchChange}
                    >
                        <MenuItem value={100}>General</MenuItem>
                        <MenuItem value={732}>Civil</MenuItem>
                        <MenuItem value={733}>CSE</MenuItem>
                        <MenuItem value={734}>EEE</MenuItem>
                        <MenuItem value={735}>ECE</MenuItem>            
                        <MenuItem value={736}>Mechanical</MenuItem>
                        <MenuItem value={737}>IT</MenuItem>
                    </Select>
                </FormControl>
            <FormControl sx={{  width: '100%' }} required>
                <TextField
                margin="dense"
                id="title"
                label="Title"
                required
                fullWidth
                variant="outlined"
                // inputRef={titleRef}
                value={title}
                multiline={true}
                rows={4}
                onChange={handleTitleChange}
                />
            </FormControl>
            <FormControl sx={{  width: '100%' }} required>
                <TextField
                margin="dense"
                id="body"
                label="Body (optional)"
                fullWidth
                variant="outlined"
                // inputRef={bodyRef}
                value={body}
                multiline={true}
                rows={10}
                onChange={handleBodyChange}
                />
            </FormControl>
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