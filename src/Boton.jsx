import * as React from 'react';
import Button from '@mui/material/Button';

export default function Boton({children,click=()=>{}}) {
    function hizoClick(){
        click();
    }
  return <Button onClick={click} variant="outlined">{children}</Button>;
}