import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import FilterListIcon from '@mui/icons-material/FilterList';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import Slider from '@mui/material/Slider';
import { filterMenuThunkCreator } from '../reducers/search-reducer';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 10,
    p: 4,
};

export default function FilterModal() {
    const dispatch = useDispatch();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [open, setOpen] = React.useState(false);
    const [checkCaribbean, setCheckCaribbean] = React.useState(true);
    const [checkGreek, setCheckGreek] = React.useState(true);
    const [checkIndian, setCheckIndian] = React.useState(true);
    const [checkChinese, setCheckChinese] = React.useState(true);
    const [checkFrench, setCheckFrench] = React.useState(true);
    const [value, setValue] = React.useState([100, 1200]);

    const caribbeanRef = React.createRef();
    const greekRef = React.createRef();
    const indianRef = React.createRef();
    const chineseRef = React.createRef();
    const frenchRef = React.createRef();
    const kCalRef = React.createRef();

    const checkChangeCaribbean = (event) => {
        setCheckCaribbean(event.target.checked);
    };
    const checkChangeGreek = (event) => {
        setCheckGreek(event.target.checked);
    };
    const checkChangeIndian = (event) => {
        setCheckIndian(event.target.checked);
    };
    const checkChangeChinese = (event) => {
        setCheckChinese(event.target.checked);

    };
    const checkChangeFrench = (event) => {
        setCheckFrench(event.target.checked);
    };


    const handleSubmit = () => {
        let min = kCalRef.current.children[2].children[0].value
        let max = kCalRef.current.children[3].children[0].value
        let filter = {

            Caribbean: caribbeanRef.current.children[0].checked,
            Greek: greekRef.current.children[0].checked,
            French: frenchRef.current.children[0].checked,
            Indian: indianRef.current.children[0].checked,
            Chinese: chineseRef.current.children[0].checked,
            kCal: [min, max]
        }
        dispatch(filterMenuThunkCreator(filter))
    }

    const clear = () => {
        setCheckCaribbean(true);
        setCheckGreek(true);
        setCheckIndian(true);
        setCheckChinese(true);
        setCheckFrench(true);
        setValue([100, 1200]);

    }
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div>
            <IconButton className='border mx-2 mt-3 filter' onClick={handleOpen} sx={{ height: 58, width: 58 }}>
                <FilterListIcon />
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <p className='h3'>
                        Filter
                    </p>
                    <FormGroup >
                        <div className='d-flex justify-content-between border-bottom mt-1 align-items-center'>
                            <p className='m-0'>Caribbean</p>
                            <Checkbox onChange={checkChangeCaribbean} checked={checkCaribbean} defaultChecked ref={caribbeanRef} style={{ color: '#82786A' }} />
                        </div>
                        <div className='d-flex justify-content-between border-bottom mt-1 align-items-center'>
                            <p className='m-0'>Greek</p>
                            <Checkbox onChange={checkChangeGreek} checked={checkGreek} defaultChecked ref={greekRef} style={{ color: '#82786A' }} />
                        </div>
                        <div className='d-flex justify-content-between border-bottom mt-1 align-items-center'>
                            <p className='m-0'>French</p>
                            <Checkbox onChange={checkChangeFrench} checked={checkFrench} defaultChecked ref={frenchRef} style={{ color: '#82786A' }} />
                        </div>
                        <div className='d-flex justify-content-between border-bottom mt-1 align-items-center'>
                            <p className='m-0'>Indian</p>
                            <Checkbox onChange={checkChangeIndian} checked={checkIndian} defaultChecked ref={indianRef} style={{ color: '#82786A' }} />
                        </div>
                        <div className='d-flex justify-content-between border-bottom mt-1 align-items-center'>
                            <p className='m-0'>Chinese</p>
                            <Checkbox onChange={checkChangeChinese} checked={checkChinese} defaultChecked ref={chineseRef} style={{ color: '#82786A' }} />
                        </div>
                    </FormGroup>
                    <Box className='mt-4'>
                        <Slider ref={kCalRef} style={{ color: '#82786A' }}
                            value={value}
                            getAriaLabel={() => 'kCal range'}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                            min={100}
                            max={1200}
                        />
                        <p>Calories, kCal</p>
                    </Box>
                    <div className='d-flex justify-content-between mt-5' >
                        <div onClick={clear} >
                            <ClearButton isChecked={[checkCaribbean, checkGreek, checkIndian, checkChinese, checkFrench]} kCal={value} />
                        </div>
                        <Button variant="contained" onClick={handleSubmit} style={{ backgroundColor: '#82786A' }}>show recipes</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

function ClearButton(props) {
    if (props.isChecked?.includes(false) || props.kCal[0] != 100 || props.kCal[1] != 1200) {
        return <Button variant="outlined" className='borderBtn' style={{ color: '#82786A' }}>clear</Button>
    }
    return <div></div>
}

function valuetext(value) {
    return `${value}`;
}
