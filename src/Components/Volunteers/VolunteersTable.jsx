import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";

const columns = [
  { id: "date", label: "Date", minWidth: 170 },
  { id: "time", label: "Time", minWidth: 100 },
  { id: "event", label: "Event", minWidth: 170, align: "center" },
  { id: "host", label: "Host", minWidth: 170, align: "center" },
  { id: "actions", label: "Actions", minWidth: 170, align: "center" },
];

const dummyNames = [
  "USIU",
  "Tech University",
  "Innovation Hub",
  "Dev Summit",
  "Future Academy",
  "Smart College",
  "Creative Labs",
  "Tech Center",
  "Design Institute",
  "AI School",
];

function createData(date, time, event, host) {
  return { date, time, event, host };
}

const rows = [
  createData("23rd Nov", "0900hrs - 1630hrs", "Pyconke", "Pyconke"),
  createData("24th Nov", "1000hrs - 1700hrs", "Tech Summit", "Tech Corp"),
  createData("25th Nov", "0800hrs - 1200hrs", "AI Workshop", "AI Innovators"),
  createData(
    "26th Nov",
    "1300hrs - 1800hrs",
    "Blockchain Expo",
    "Blockchain Inc."
  ),
  createData(
    "27th Nov",
    "0900hrs - 1500hrs",
    "Cybersecurity Seminar",
    "SecureTech"
  ),
  createData(
    "28th Nov",
    "1100hrs - 1600hrs",
    "Digital Marketing Conference",
    "MarketMasters"
  ),
  createData(
    "14th Dec",
    "0800hrs - 1200hrs",
    "Cybersecurity Conference",
    "SecureFuture"
  ),
  createData(
    "15th Dec",
    "1100hrs - 1500hrs",
    "Machine Learning Workshop",
    "ML Hub"
  ),
  createData(
    "16th Dec",
    "0900hrs - 1700hrs",
    "Tech Innovation Expo",
    "Innovators Guild"
  ),
  createData(
    "17th Dec",
    "1300hrs - 1800hrs",
    "Database Management Seminar",
    "DBExperts"
  ),
  createData("18th Dec", "1000hrs - 1400hrs", "AI Ethics Forum", "Ethics Tech"),
  createData(
    "19th Dec",
    "0800hrs - 1200hrs",
    "Tech Careers Fair",
    "CareerTech"
  ),
  createData(
    "20th Dec",
    "1200hrs - 1700hrs",
    "Software Testing Workshop",
    "TestMasters"
  ),
  createData(
    "21st Dec",
    "0900hrs - 1300hrs",
    "Smart Tech Conference",
    "SmartTech"
  ),
  createData(
    "22nd Dec",
    "1100hrs - 1600hrs",
    "Data Privacy Seminar",
    "PrivacyGuard"
  ),
];

export default function VolunteersTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    padding: "16px",
                    borderBottom: "2px solid #e0e0e0",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.date}>
                  {columns.map((column) => {
                    const value = row[column.id];

                    if (column.id === "date") {
                      const [day, month] = value.split(" ");
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          sx={{
                            textAlign: "center",
                            padding: "16px",
                            verticalAlign: "middle",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "64px",
                          }}
                        >
                          <Box
                            display="flex"
                            flexDirection="row"
                            alignItems="center"
                            justifyContent="center"
                          >
                            <Box
                              display="flex"
                              flexDirection="column"
                              alignItems="center"
                              justifyContent="center"
                            >
                              <Typography
                                component="span"
                                variant="body1"
                                sx={{
                                  color: "#e86a33",
                                  display: "block",
                                  fontWeight: "bold",
                                }}
                              >
                                {day}
                              </Typography>
                              <Typography
                                component="span"
                                variant="body1"
                                sx={{
                                  color: "#e86a33",
                                  display: "block",
                                  fontWeight: "bold",
                                }}
                              >
                                {month}
                              </Typography>
                            </Box>
                            <Divider
                              orientation="vertical"
                              flexItem
                              sx={{
                                height: "50px",
                                borderColor: "gray",
                                marginLeft: "1rem",
                              }}
                            />
                          </Box>
                        </TableCell>
                      );
                    }

                    if (column.id === "time") {
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          sx={{
                            verticalAlign: "middle",
                            padding: "16px",
                            textAlign: column.align || "left",
                            height: "64px",
                          }}
                        >
                          <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                          >
                            <Box display="flex" alignItems="center">
                              <AccessTimeIcon
                                sx={{
                                  marginRight: "8px",
                                  color: "#e86a33",
                                }}
                              />
                              <Typography component="span" variant="body1">
                                {value}
                              </Typography>
                            </Box>
                            <Box display="flex" alignItems="center" marginTop="1rem">
                              <LocationOnIcon
                                sx={{
                                  marginRight: "8px",
                                }}
                              />
                              <Typography component="span" variant="body1">
                                {
                                  dummyNames[
                                    Math.floor(
                                      Math.random() * dummyNames.length
                                    )
                                  ]
                                }
                              </Typography>
                            </Box>
                          </Box>
                        </TableCell>
                      );
                    }

                    if (column.id === "actions") {
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          sx={{
                            textAlign: "center",
                            padding: "16px",
                            height: "64px",
                          }}
                        >
                          <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            gap="8px"
                          >
                            <EditCalendarIcon
                              sx={{
                                color: "#028e37",
                                cursor: "pointer",
                              }}
                            />
                            <VisibilityIcon
                              sx={{
                                color: "#028e37",
                                cursor: "pointer",
                              }}
                            />
                            <DeleteIcon
                              sx={{
                                color: "#e86a33",
                                cursor: "pointer",
                              }}
                            />
                          </Box>
                        </TableCell>
                      );
                    }

                    return (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        sx={{
                          textAlign: column.align || "left",
                          padding: "16px",
                          height: "64px",
                        }}
                      >
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
