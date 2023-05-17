import  React, {useState} from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import IProduct from '../types/product';
import { AnyIfEmpty } from 'react-redux';
import { useRouter } from 'next/router';

interface IPaginatorProps {
    quantityProduct:number
    quantityProductForPage:number
}

const PaginationRanges: React.FC<IPaginatorProps> = ({quantityProduct, quantityProductForPage})=> {
      let [page, setPage] = useState(1);
      const router = useRouter()
      let pagesCount = Math.ceil( quantityProduct/quantityProductForPage)

      function jump (page: string) {
       router.push(`/products/${page}`)
       
      }

      const handleChange = (e:any, p: any) => {
    console.log()
    setPage(p);
    jump(p);
  };
  
  return (
    <Stack spacing={2}>
        <Pagination
        count={pagesCount}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
        />
    </Stack>
  );
}

export default  PaginationRanges