import {FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useGlobalContext} from '../../../contexts/GlobalContextProvider';

const UnauthorizedHomePage = () => {
   const navigate = useNavigate();
   const {
      categoriesArr,
      category,
      setCategory,
      getCategoriesServices,
      getServices,
   } = useGlobalContext();

   useEffect(() => {
      getCategoriesServices();
      getServices();
   }, []);

   return (
      <div>
         <h1>Добро пожаловать, гость</h1>

         <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
               Какими услугами вы хотели бы сегодня воспользоваться?
            </InputLabel>
            <Select
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value={category}
               label="Категория услуг"
               onChange={e => {
                  setCategory(e.target.value);
                  navigate('/task-options');
               }}
            >
               {categoriesArr.map(category => {
                  return (
                     <MenuItem value={category.id}>{category.title}</MenuItem>
                  );
               })}
            </Select>
         </FormControl>
      </div>
   );
};

export default UnauthorizedHomePage;
