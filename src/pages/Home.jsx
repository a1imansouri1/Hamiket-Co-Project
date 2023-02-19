import React, { useState, useEffect } from 'react'

import { useBetween } from "use-between";
import useSharedFormState from "../components/useFormState";


import FormPr from '../components/FormPr';

import { useDispatch, useSelector } from 'react-redux';


import { Icon } from '@iconify/react';
import searchLine from '@iconify/icons-ri/search-line';

import data from '../assets/data'

import ReactPaginate from 'react-paginate'

import '../styles.css'

import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import Box from '@mui/material/Box';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import CssBaseline from '@mui/material/CssBaseline';

import { borderLeft, borderRight, color, minHeight } from '@mui/system';

import Dropdown from 'react-bootstrap/Dropdown';


const Home = () => {




  const dispatch = useDispatch()

  // const newCount = useSelector(state => state.incDec.newCount)

  const countItemArr = useSelector(state => state.incDec.countItemArr)
  // const newCount = countItemArr.quantity
  // console.log(newCount)





  const [stockStatus, setStockStatus] = useState("ALL");
  var [displayPage, setAllProducts] = useState(data);

  useEffect(() => {
    if (stockStatus === "ALL") {
      setAllProducts(data);
    }

    if (stockStatus === "3") {
      const filteredProducts = data.filter((item) => item.stockStatus === "3");
      setAllProducts(filteredProducts);
    }

    if (stockStatus === "2") {
      const filteredProducts = data.filter((item) => item.stockStatus === "2");
      setAllProducts(filteredProducts);
    }

    if (stockStatus === "1") {
      const filteredProducts = data.filter((item) => item.stockStatus === "1");
      setAllProducts(filteredProducts);
    }

  }, [stockStatus]);

  const [productPerPage, setProductPerPage] = useState(10);

  useEffect(() => {
    if (productPerPage === 10) {
      setProductPerPage(10);
    }

    if (productPerPage === 8) {
      setProductPerPage(8);
    }

    if (productPerPage === 6) {
      setProductPerPage(6);
    }

    if (productPerPage === 4) {
      setProductPerPage(4);
    }

    if (productPerPage === 2) {
      setProductPerPage(2);
    }

  }, [productPerPage]);


  const [searchTerm, setSearchTerm] = useState('')
  const [pageNumber, setPageNumber] = useState(0)

  const searchedProduct = displayPage.filter(item => {

    if (searchTerm.value === '') return item
    if (item.productDetail.productName.toLowerCase().includes(searchTerm.toLowerCase()))
      return item
  })




  // const productPerPageArr = [1, 2, 3, 4]



  // const productPerPage = 12
  const visitedPage = pageNumber * productPerPage
  var displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage)

  const pageCount = Math.ceil(searchedProduct.length / productPerPage)

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }


  const BasicExample = () => {
    return (

      (
        <div className='divlist'>
          <Dropdown className='list1'>
            <Dropdown.Toggle variant="" className='dropdown1' >

              {
                stockStatus === 'ALL' ?
                  <>
                    <div className='dropList d-flex align-item-center gap-2'>
                      <span className='emailU'>
                        همه کالاها
                      </span>
                    </div>
                  </> :

                  stockStatus === '3' ?
                    <>
                      <div className='dropList d-flex align-item-center gap-2'>
                        <span className='emailU'>
                          در انتظار تأیید
                        </span>
                      </div>
                    </> :

                    stockStatus === '2' ?
                      <>
                        <div className='dropList d-flex align-item-center gap-2'>
                          <span className='emailU'>
                            تأیید شده
                          </span>
                        </div>
                      </> :

                      stockStatus === '1' ?
                        <>
                          <div className='dropList d-flex align-item-center gap-2'>
                            <span className='emailU'>
                              رد شده
                            </span>
                          </div>
                        </> : ''
              }


            </Dropdown.Toggle>
            <Dropdown.Menu className='list1 m-0' align="end" >

              <Dropdown.Item onClick={() => setStockStatus("ALL")} as='button' className='list2'>
                <span>همه کالاها</span>
              </Dropdown.Item>

              <Dropdown.Item onClick={() => setStockStatus("3")} as='button' className='list2'>
                <span>در انتظار تأیید</span>
              </Dropdown.Item>

              <Dropdown.Item onClick={() => setStockStatus("2")} as='button' className='list2'>
                <span>تأیید شده</span>
              </Dropdown.Item>

              <Dropdown.Item onClick={() => setStockStatus("1")} as='button' className='list2'>
                <span>رد شده</span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown >
        </div>
      )
    );
  }

  const ProductPerPageDropDown = () => {
    return (

      (
        <div className='divlist2'>
          <span className='divlist2Desc'>
            تعداد نمایش در هر صفحه
          </span>
          <Dropdown className='list3'>
            <Dropdown.Toggle variant="" className='dropdown1' >

              {
                productPerPage === 10 ?
                  <>
                    <div className='dropList d-flex align-item-center gap-2'>
                      <span className='emailU'>
                        10
                      </span>
                    </div>
                  </> :

                  productPerPage === 8 ?
                    <>
                      <div className='dropList d-flex align-item-center gap-2'>
                        <span className='emailU'>
                          8
                        </span>
                      </div>
                    </> :

                    productPerPage === 6 ?
                      <>
                        <div className='dropList d-flex align-item-center gap-2'>
                          <span className='emailU'>
                            6
                          </span>
                        </div>
                      </> :

                      productPerPage === 4 ?
                        <>
                          <div className='dropList d-flex align-item-center gap-2'>
                            <span className='emailU'>
                              4
                            </span>
                          </div>
                        </> :

                        productPerPage === 2 ?
                          <>
                            <div className='dropList d-flex align-item-center gap-2'>
                              <span className='emailU'>
                                2
                              </span>
                            </div>
                          </> : ''
              }


            </Dropdown.Toggle>
            <Dropdown.Menu className='list3 m-0' align="end" >

              <Dropdown.Item onClick={() => setProductPerPage(10)} as='button' className='list2'>
                <span>10</span>
              </Dropdown.Item>

              <Dropdown.Item onClick={() => setProductPerPage(8)} as='button' className='list2'>
                <span>8</span>
              </Dropdown.Item>

              <Dropdown.Item onClick={() => setProductPerPage(6)} as='button' className='list2'>
                <span>6</span>
              </Dropdown.Item>

              <Dropdown.Item onClick={() => setProductPerPage(4)} as='button' className='list2'>
                <span>4</span>
              </Dropdown.Item>

              <Dropdown.Item onClick={() => setProductPerPage(2)} as='button' className='list2'>
                <span>2</span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown >
        </div>
      )
    );
  }


  const theme = createTheme({
    palette: {
      text: {
        primary: "#6a6464"
      }
    },
    typography: {
      fontFamily: 'XBRoya',
      fontSize: 18,
      color: 'white'
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
        @font-face {
          font-family: 'XBRoya';
          src: local('XBRoya'), url(../font/XBRoya.ttf) format('truetype');
        }
        `,
      },
    },
  });


  const useStyles = makeStyles({
    root: {
      width: '100%',
      minHeight: 200,
      overflowX: 'auto',
      "& .MuiTableCell-head": {
        color: "white",
        backgroundColor: "royalBlue",
      },
      "& .MuiTableCell-root": {
        padding: 50,
        minHeight: 200
      },
      fontSize: 5,

    },
    table: {
      minWidth: 650,
    },
    tableRow: {
      "&$selected, &$selected:hover": {
        backgroundColor: "white"
      }
    },
    tableCell: {
      "$selected &": {
        color: "red",
        backgroundColor: "yellow"
      }
    },
    hover: {},
    selected: {}
  });



  // const [isExpanded, setIsExpanded] = React.useState(false);
  const {isExpanded, setIsExpanded} = useSharedFormState();

  const ExpandableTableRow = ({ children, expandComponent, abc, ...otherProps }) => {
    // const [isExpanded, setIsExpanded] = React.useState(isExpanded1);

    return (
      <>
        <TableRow {...otherProps}>

          <TableCell padding="checkbox">
            {abc == 3 ?

              (<IconButton onClick={() => {
                setIsExpanded(!isExpanded)
                // localStorage.setItem('isExpand', isExpanded)
              }}>
                {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>)
              :
              ''}
          </TableCell>

          {children}
        </TableRow>
        {isExpanded && (

          abc == 3 ?
            (<TableRow>
              <TableCell padding="checkbox" />
              {expandComponent}
            </TableRow>)
            :
            ''

        )}
      </>
    );
  };



  const SimpleTable = (propsT) => {

    const classes = useStyles();





    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            fontFamily: 'B-Nazanin',
            borderColor: 'black !important',
          }}
          mr={3}
          ml={3}
        >
          <Paper className={classes.root}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead className=''>
                <TableRow>
                  <TableCell padding="checkbox" />
                  <TableCell align="center">تاریخ </TableCell>
                  <TableCell align="center">وضعیت </TableCell>
                  <TableCell align="center">هزینه ارسال</TableCell>
                  <TableCell align="center">قیمت</TableCell>
                  <TableCell align="center">تعداد</TableCell>
                  <TableCell align="center">خریدار</TableCell>
                  <TableCell align="center">کالا</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>

                {displayPage.map(item => (
                  <ExpandableTableRow

                    key={item.id}
                    abc={item.stockStatus}
                    expandComponent=

                    {
                      // item.stockStatus == 3 ?
                      (
                        (
                          <TableCell colSpan="7">

                            {/* {item.stockStatus == 3 ? */}
                            <FormPr item={item.price} id={item.id} qty={
                              countItemArr.map((ele, i) => {
                                return (
                                  ele.id == item.id ? ele.quantity : null
                                )
                              }).find(element => element ? element : null)
                            }

                            />



                            {/* : '' */}
                            {/* } */}

                          </TableCell>
                        )
                      )
                      // :
                      // ''
                    }
                  >

                    <TableCell align="center" dir='rtl'>13:45 – 10 آبان 1401</TableCell>
                    <TableCell align="center">
                      {
                        item.stockStatus === '3' ?
                          <Box
                            sx={{
                              bgcolor: "yellow",
                              border: 1,
                              borderColor: 'white',
                              borderRadius: 50,
                              padding: 2,
                              color: 'orange',
                              fontWeight: 'Bold'
                            }}>
                            در انتظار تأیید
                          </Box>

                          : (
                            item.stockStatus === '2' ?
                              <Box
                                sx={{
                                  bgcolor: "lightGreen",
                                  border: 1,
                                  borderColor: 'white',
                                  borderRadius: 50,
                                  padding: 2,
                                  color: 'green',
                                  fontWeight: 'Bold'
                                }}>
                                تایید شده
                              </Box>

                              : (
                                item.stockStatus === '1' ?
                                  <Box
                                    sx={{
                                      bgcolor: "#ffa4a4",
                                      border: 1,
                                      borderColor: 'white',
                                      borderRadius: 50,
                                      padding: 2,
                                      color: 'red',
                                      fontWeight: 'Bold'
                                    }}>
                                    رد شده
                                  </Box>
                                  : ''
                              )
                          )
                      }
                    </TableCell>
                    <TableCell align="center" dir="rtl"> {item.sendPrice} تومان</TableCell>
                    <TableCell align="center" dir="rtl">{item.price} تومان</TableCell>
                    <TableCell align="center">{item.quantity}</TableCell>
                    <TableCell align="center">{item.userName}</TableCell>
                    <TableCell align="center" component="th" scope="row">
                      {item.productDetail.productName}
                    </TableCell>

                  </ExpandableTableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Box>
      </ThemeProvider >


    );
  }



  return (

    <>


      <div className='majorDiv'>
        <div className="search_widget d-flex align-items-center">
          <Icon className='searchIcon' icon={searchLine} height='20' inline={true} />
          <input type="text" placeholder="جستجو ..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        </div>

        <BasicExample />
        <ProductPerPageDropDown />

      </div>

      {/* <FormPr /> */}
      <SimpleTable />

      <div className='bottomPage'>
        <ReactPaginate pageCount={pageCount} onPageChange={changePage} previousLabel='قبلی' nextLabel='بعدی' containerClassName='paginationBttns' activeClassName='pageActive' />
        <span className='resultCount'>
          تعداد نتایج: {displayPage.length} مورد
        </span>
      </div>


    </>
  )
}

export default Home