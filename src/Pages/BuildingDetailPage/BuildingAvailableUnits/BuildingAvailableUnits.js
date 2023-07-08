import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  MenuItem,
  MenuList,
  Box,
  TableSortLabel,
  Popper,
  ListItemIcon,
  Typography,
  Grid,
} from "@mui/material";
import { ExpandMore, Check } from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function filterRows(rows, status) {
  if (_.isEqual("All", status)) {
    return rows;
  }
  return rows.filter((row) => row.Status === status);
}
const _ = require("lodash");

function BuildingAvailableUnits() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("name");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [status, setStatus] = React.useState("All");
  const [expanded, setExpanded] = React.useState(false);

  function createData(
    name,
    Type,
    Status,
    Price,
    PriceM2,
    PriceSqFt,
    Beds,
    Baths,
    FloorPlan
  ) {
    return {
      name,
      Type,
      Status,
      Price,
      PriceM2,
      PriceSqFt,
      Beds,
      Baths,
      FloorPlan,
    };
  }

  const rows = [
    createData(
      "BR-624193",
      "Sale",
      "Active",
      "AED 24",
      "AED 878967",
      "AED 24",
      4,
      12,
      "Test2"
    ),
    createData(
      "BR-624195",
      "Rent",
      "Contract Signed",
      "AED 37",
      "AED 986132",
      "AED 24",
      3,
      80,
      12,
      "Tes1"
    ),
    createData(
      "BR-624125",
      "Rent",
      "Under Offer",
      "AED 49",
      "AED 986178",
      "AED 24",
      3.9,
      12,
      "Floo45"
    ),
    createData(
      "BR-624197",
      "Sale",
      "Active",
      "AED 40",
      "AED 894521",
      "AED 24",
      2,
      10,
      "Test3"
    ),
    createData(
      "BR-624199",
      "Rent",
      "Active",
      "AED 30",
      "AED 754321",
      "AED 24",
      3,
      15,
      "Test4"
    ),
    createData(
      "BR-624202",
      "Sale",
      "Contract Signed",
      "AED 55",
      "AED 675493",
      "AED 24",
      5,
      18,
      "Test5"
    ),
    createData(
      "BR-624206",
      "Rent",
      "Under Offer",
      "AED 42",
      "AED 984751",
      "AED 24",
      4.5,
      14,
      "Test6"
    ),
    createData(
      "BR-624210",
      "Sale",
      "Active",
      "AED 47",
      "AED 758924",
      "AED 24",
      3,
      12,
      "Test7"
    ),
    createData(
      "BR-624214",
      "Rent",
      "Active",
      "AED 35",
      "AED 857149",
      "AED 24",
      2.5,
      10,
      "Test8"
    ),
    createData(
      "BR-624218",
      "Sale",
      "Under Offer",
      "AED 60",
      "AED 984751",
      "AED 24",
      6,
      20,
      "Test9"
    ),
  ];

  const columnLabels = {
    name: "Ref. No",
    Type: "Type",
    Status: "Status",
    Price: "Price",
    PriceM2: " Price m²",
    PriceSqFt: " Price Sq.Ft",
  };

  const columnSortOptions = {
    name: ["Recent", "A - z", "Z - A"],
    Type: ["Rent", "Sale"],
    Status: ["All", "Active", "Contract Signed", "Under Offer"],
    Price: ["High to Low", "Low to High"],
    PriceM2: ["High to Low", "Low to High"],
    PriceSqFt: ["High to Low", "Low to High"],
  };

  const handleRequestSort = (property, event) => {
    setAnchorEl(event.currentTarget);
    setOrderBy(property);
  };

  const handleSortAction = (option) => {
    let newOrder = "asc";
    if (
      _.isEqual(option, "High to Low") ||
      _.isEqual(option, "Z - A") ||
      _.isEqual(option, "Sale")
    ) {
      newOrder = "desc";
    }
    setOrder(newOrder);

    if (_.isEqual(orderBy, "Status")) {
      setStatus(option);
    }

    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const filteredRows = React.useMemo(
    () => filterRows(rows, status),
    [order, orderBy, rows, status]
  );

  const sortedRows = React.useMemo(() => {
    const comparator = (a, b) => {
      if (
        _.isEqual(typeof a[orderBy], "number") &&
        _.isEqual((typeof b[orderBy], "number"))
      ) {
        return _.isEqual(order, "asc")
          ? a[orderBy] - b[orderBy]
          : b[orderBy] - a[orderBy];
      } else {
        const compA = a[orderBy].toUpperCase();
        const compB = b[orderBy].toUpperCase();
        if (compA < compB) {
          return _.isEqual(order, "asc") ? -1 : 1;
        }
        if (compA > compB) {
          return _.isEqual(order, "asc") ? 1 : -1;
        }
        return 0;
      }
    };

    return [...filteredRows].sort(comparator);
  }, [order, orderBy, filteredRows]);

  const displayedRows = expanded ? sortedRows : sortedRows.slice(0, 7);

  return (
    <>
      <Box className="availableUnitsHeader">
        <Typography variant="DubaiRegular20Bold">Available Units</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {Object.keys(columnLabels).map((column) => (
                <TableCell key={column}>
                  <Box display="flex" alignItems="center">
                    <TableSortLabel
                      className="buildingTableLabelIcon"
                      active={_.isEqual(orderBy, column)}
                      direction={_.isEqual(orderBy, column) ? order : "asc"}
                      onClick={(e) => handleRequestSort(column, e)}
                    >
                      <Typography variant="DubaiRegular18Bold">
                        {columnLabels[column]}
                        {_.isEqual(orderBy, column)}

                        <ExpandMore />
                      </Typography>
                    </TableSortLabel>
                  </Box>
                </TableCell>
              ))}
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Typography variant="DubaiRegular18Bold">Beds</Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Typography variant="DubaiRegular18Bold">Baths</Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Typography variant="DubaiRegular18Bold">
                    Floorplan
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedRows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>
                  <Typography variant="DubaiRegular18">{row.Type}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="DubaiRegular18">{row.Status}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="DubaiRegular18">{row.Price}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="DubaiRegular18">
                    {row.PriceM2}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="DubaiRegular18">
                    {row.PriceSqFt}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="DubaiRegular18">{row.Beds}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="DubaiRegular18">{row.Baths}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="DubaiRegular18">
                    {row.FloorPlan}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Popper open={open} anchorEl={anchorEl} elevation={20}>
          <Paper elevation={3}>
            <MenuList>
              {columnSortOptions[orderBy].map((option) => (
                <MenuItem
                  key={option}
                  onClick={() => handleSortAction(option)}
                  selected={
                    (_.isEqual(option, status) &&
                      _.isEqual(orderBy, "Status")) ||
                    (_.isEqual(option, orderBy) &&
                      !_.isEqual(orderBy, "Status"))
                  }
                >
                  {_.isEqual(option, status) || _.isEqual(option, orderBy) ? (
                    <ListItemIcon className="buildingTableCheckIcon">
                      <Check />
                    </ListItemIcon>
                  ) : null}
                  <Typography
                    variant="DubaiRegular16"
                    className="buildingTableOptions"
                  >
                    {option}
                  </Typography>
                </MenuItem>
              ))}
            </MenuList>
          </Paper>
        </Popper>
      </TableContainer>
      {!expanded && sortedRows.length > 7 && (
        <Grid container>
          <Grid item md={3} onClick={() => setExpanded(true)}>
            <Box display="flex" alignItems="center">
              <Typography variant="DubaiRegular18">View More </Typography>
              <KeyboardArrowDownIcon />
            </Box>
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default BuildingAvailableUnits;
