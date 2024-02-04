import { useLocation, useSearchParams } from "react-router-dom";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Filterdata, getdata } from "../../Redux/Product_redux/action";
import Styles from "../../Pages/WebsitePages/ProductPage/Product.module.css";
import { Mycontext } from "./Contextapi/ContextApi";
const Filtering = ({ i, rerenderstop }) => {
  const { sortdata, search } = useContext(Mycontext);
  console.log("i ma sortdataaaaa,searchaaaaaaaaaaaaaaaaaaaaaaaaaaa", search);
  const details = useSelector((data) => data.homeproduct);
  const [params, setParams] = useSearchParams();
  let persist = params.getAll("category");
  const persistsort = params.getAll("_sort");
  const [value, setValue] = useState(persist || []);
  const [sort, setSort] = useState(persistsort || "");
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    if (value || sortdata || search.searchdata) {
      console.log("i ma aaaaaa agin", value);
      details.obj.category = value;
      {
        sortdata !== "" && (details.obj._sort = sortdata);
      }
      {
        search !== "" && (details.obj.q = search.searchdata);
      }
      setParams(details.obj);
    }

    if (location.search !== "") {
      const changledata = {
        params: {
          category: params.getAll("category"),
          _sort: params.getAll("_sort"),
          q: params.getAll("q"),
        },
      };
      dispatch(Filterdata(changledata));
    } else {
      dispatch(getdata());
    }
  }, [value, location.search, sortdata, search.searchdata]);
  function handleChange(e) {
    const category = [...value];
    if (category.includes(e.target.value)) {
      category.splice(category.indexOf(e.target.value), 1);
    } else {
      category.push(e.target.value);
    }
    setValue(category);
  }
  return (
    <div className={Styles.filtering}>
      <Accordion
        defaultIndex={[0]}
        allowMultiple
        textAlign="left"
        fontWeight="530"
        fontSize="21px"
        padding="4px"
        onClick={() => rerenderstop(i)}
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontWeight="630"
                fontSize="21px"
                padding="4px"
              >
                Category
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            overflow="scroll"
            height="150px"
            fontSize="17px"
          >
            <Box
              padding="2px"
              position="relative"
              fontWeight="700"
              overflow="hidden"
            >
              <span style={{ display: "flex" }}>
                <input
                  type="checkbox"
                  id=""
                  onChange={handleChange}
                  checked={value.includes("men")}
                  value="men"
                />{" "}
                <label style={{ marginLeft: "5px" }} position="absolute">
                  Men
                </label>
              </span>
              <span style={{ display: "flex", marginTop: "10px" }}>
                <input
                  type="checkbox"
                  id=""
                  onChange={handleChange}
                  checked={value.includes("women")}
                  value="women"
                />{" "}
                <label style={{ marginLeft: "5px" }} position="absolute">
                  Women
                </label>
              </span>
              <span style={{ display: "flex", marginTop: "10px" }}>
                <input
                  type="checkbox"
                  onChange={handleChange}
                  checked={value.includes("child")}
                  value="child"
                />{" "}
                <label style={{ marginLeft: "5px" }} position="absolute">
                  Baby
                </label>
              </span>
              <span style={{ display: "flex", marginTop: "10px" }}>
                <input
                  type="checkbox"
                  id=""
                  onChange={handleChange}
                  checked={value.includes("unisex")}
                  value="unisex"
                />{" "}
                <label style={{ marginLeft: "5px" }} position="absolute">
                  Unisex
                </label>
              </span>
              <span style={{ display: "flex", marginTop: "10px" }}>
                <input
                  type="checkbox"
                  id=""
                  onChange={handleChange}
                  checked={value.includes("baby boys")}
                  value="baby boys"
                />{" "}
                <label style={{ marginLeft: "5px" }} position="absolute">
                  Baby Boys
                </label>
              </span>
              <span style={{ display: "flex", marginTop: "10px" }}>
                <input
                  type="checkbox"
                  id=""
                  onChange={handleChange}
                  checked={value.includes("baby girls")}
                  value="baby girls"
                />{" "}
                <label style={{ marginLeft: "5px" }} position="absolute">
                  Baby Girls
                </label>
              </span>
            </Box>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton marginTop="15px">
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontWeight="630"
                fontSize="21px"
                padding="4px"
              >
                Price
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            overflow="scroll"
            height="150px"
            fontSize="17px"
          >
            <Box padding="5px" position="relative" fontWeight="700">
              <input
                type="checkbox"
                id=""
                onChange={handleChange}
                value="1000-2000"
                checked={value.includes("1000-2000")}
              />{" "}
              <label style={{ marginLeft: "5px" }} position="absolute">
                1000-2000
              </label>
              <br />
              <br />
              <input
                type="checkbox"
                id=""
                onChange={handleChange}
                value="2000-5000"
                checked={value.includes("2000-5000")}
              />{" "}
              <label style={{ marginLeft: "5px" }} position="absolute">
                2000-5000
              </label>
              <br />
              <br />
              <input
                type="checkbox"
                id=""
                onChange={handleChange}
                value="500-1000"
                checked={value.includes("500-1000")}
              />{" "}
              <label style={{ marginLeft: "5px" }} position="absolute">
                500-1000
              </label>
              <br />
              <br />
              <input
                type="checkbox"
                id=""
                onChange={handleChange}
                value="Above 500"
                checked={value.includes("Above 500")}
              />{" "}
              <label
                style={{ marginLeft: "5px", overflow: "hidden" }}
                position="absolute"
              >
                Above 500
              </label>
              <br />
              <br />
              <input
                type="checkbox"
                id=""
                onChange={handleChange}
                value="Below 500"
                checked={value.includes("Below 500 ")}
              />{" "}
              <label style={{ marginLeft: "5px" }} position="absolute">
                Below 500
              </label>
            </Box>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton marginTop="15px">
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontWeight="630"
                fontSize="21px"
                padding="4px"
              >
                Discount
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            overflow="scroll"
            height="150px"
            fontSize="17px"
          >
            <Box
              padding="2px"
              position="relative"
              fontWeight="700"
              overflow="hidden"
            >
              <span style={{ display: "flex" }}>
                <input
                  type="checkbox"
                  id=""
                  onChange={handleChange}
                  value="0"
                  checked={value.includes("0")}
                />{" "}
                <label style={{ marginLeft: "5px" }} position="absolute">
                  0% or more
                </label>
              </span>
              <span style={{ display: "flex", marginTop: "10px" }}>
                <input
                  type="checkbox"
                  id=""
                  onChange={handleChange}
                  value="10"
                  checked={value.includes("10")}
                />{" "}
                <label style={{ marginLeft: "5px" }} position="absolute">
                  10% or more
                </label>
              </span>
              <span style={{ display: "flex", marginTop: "10px" }}>
                <input
                  type="checkbox"
                  id=""
                  value="20"
                  checked={value.includes("20")}
                />{" "}
                <label style={{ marginLeft: "5px" }} position="absolute">
                  20% or more
                </label>
              </span>
              <span style={{ display: "flex", marginTop: "10px" }}>
                <input
                  type="checkbox"
                  id=""
                  onChange={handleChange}
                  value="30"
                  checked={value.includes("30")}
                />{" "}
                <label style={{ marginLeft: "5px" }} position="absolute">
                  30% or more
                </label>
              </span>
              <span style={{ display: "flex", marginTop: "10px" }}>
                <input
                  type="checkbox"
                  id=""
                  onChange={handleChange}
                  value="40"
                  checked={value.includes("40")}
                />{" "}
                <label style={{ marginLeft: "5px" }} position="absolute">
                  40% or more
                </label>
              </span>
              <span style={{ display: "flex", marginTop: "10px" }}>
                <input
                  type="checkbox"
                  id=""
                  onChange={handleChange}
                  value="50"
                  checked={value.includes("50")}
                />{" "}
                <label style={{ marginLeft: "5px" }} position="absolute">
                  50% or more
                </label>
              </span>
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton marginTop="15px">
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontWeight="630"
                fontSize="20px"
                // padding="2px"
                display="flex"
              >
                Store Name
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            overflow="scroll"
            height="150px"
            fontSize="17px"
          >
            <Box
              padding="2px"
              position="relative"
              fontWeight="700"
              overflow="hidden"
            >
              <span style={{ display: "flex" }}>
                <input type="checkbox" id="" onChange={handleChange} />{" "}
                <label style={{ marginLeft: "5px" }} position="absolute">
                  AAP KI DUKAAN
                </label>
              </span>
              <span style={{ display: "flex", marginTop: "10px" }}>
                <input type="checkbox" id="" onChange={handleChange} />{" "}
                <label style={{ marginLeft: "5px" }} position="absolute">
                  Ameecart
                </label>
              </span>
              <span style={{ display: "flex", marginTop: "10px" }}>
                <input type="checkbox" id="" onChange={handleChange} />{" "}
                <label style={{ marginLeft: "5px" }} position="absolute">
                  F&Anuna
                </label>
              </span>
              <span style={{ display: "flex", marginTop: "10px" }}>
                <input type="checkbox" id="" onChange={handleChange} />{" "}
                <label style={{ marginLeft: "5px" }} position="absolute">
                  Arihant Enterprises
                </label>
              </span>
              <span style={{ display: "flex", marginTop: "10px" }}>
                <input type="checkbox" id="" onChange={handleChange} />{" "}
                <label style={{ marginLeft: "5px" }} position="absolute">
                  Embellish
                </label>
              </span>
              <span style={{ display: "flex", marginTop: "10px" }}>
                <input type="checkbox" id="" onChange={handleChange} />{" "}
                <label style={{ marginLeft: "5px" }} position="absolute">
                  Fomil
                </label>
              </span>
            </Box>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton marginTop="15px">
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontWeight="630"
                fontSize="21px"
                padding="4px"
              >
                Returnable
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton marginTop="15px">
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontWeight="630"
                fontSize="21px"
              >
                Cancellable
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Filtering;
