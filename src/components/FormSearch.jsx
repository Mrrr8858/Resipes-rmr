import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { changeMenuThunkCreator } from '../reducers/search-reducer';
import { useDispatch } from 'react-redux';

function FormSearch() {
    const dispatch = useDispatch();
    const [value, setValue] = React.useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(changeMenuThunkCreator(value));
    }
    const clear = () => {
        setValue('');
    }
    if (isEmpty(value)) {
        return (
            <div className="mt-3">
                <Paper
                    component="form"
                    sx={{ p: '8px 4px', display: 'flex', alignItems: 'center' }} className='search'
                >
                    <SearchIcon sx={{ m: 1 }} />
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search" value={value}
                        inputProps={{ 'aria-label': 'Search' }} onChange={handleChange}
                    />
                    <IconButton type="submit" onClick={handleSubmit} className='d-none' aria-label="Search"></IconButton>
                </Paper>
            </div >
        );
    }
    return (
        <div className="mt-3">
            <Paper
                component="form"
                sx={{ p: '8px 4px', display: 'flex', alignItems: 'center' }} className='search'
            >
                <SearchIcon sx={{ m: 1 }} />
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'Search' }} onChange={handleChange}
                />
                <IconButton aria-label="search" onClick={clear}>
                    <CloseIcon />
                </IconButton>
                <IconButton type="submit" onClick={handleSubmit} className='d-none' aria-label="Search"></IconButton>
            </Paper>
        </div >
    );

}
function isEmpty(str) {
    if (str.trim() == '')
        return true;

    return false;
}
export default FormSearch;