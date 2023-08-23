import {
  Box,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import FootballerImg from "../../assets/footballer.png";
import BasketballerImg from "../../assets/basketball.png";
import Carousel from "react-material-ui-carousel";

export default function Home() {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const atheletsData = [
    {
      id: "01",
      name: "CONNECTION",
      description: `Connect with coaches directly, you can ping coaches to view profile.`,
    },
    {
      id: "02",
      name: "COLLABORATION",
      description:
        "Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.",
    },
    {
      id: "03",
      name: "GROWTH",
      description:
        "Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc ",
    },
  ];

  const playerData = [
    {
      id: "01",
      name: "CONNECTION",
      description: `Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.`,
    },
    {
      id: "02",
      name: "COLLABORATION",
      description:
        "Work with recruiter to increase your chances of findingtalented athlete.",
    },
    {
      id: "03",
      name: "GROWTH",
      description: "Save your time, recruit proper athlets for your team.",
    },
  ];

  return (
    <Grid
      container
      spacing={2}
      sx={{
        overflow: "hidden",
      }}
    >
      <Grid item xs={12} sm={4} lg={6}>
        <Stack
          sx={{
            position: "relative",
          }}
        >
          <Box
            component="img"
            src={FootballerImg}
            sx={{
              width: { xs: "200px", sm: "400px", lg: "450px" },
              position: "absolute",
              top: { xs: "100px", sm: "24px", lg: 0 },
              left: { xs: "0", sm: "-130px", lg: "100px" },
              right: 0,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </Stack>
      </Grid>

      {smDown ? (
        <>
          <Grid item xs={12}>
            <Stack direction="column" spacing={2} pt={2} pb={5}>
              <Typography variant="h2" color="#E7E7E7" pl={2}>
                ATHLETS
              </Typography>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            mt={"200px"}
            pb={5}
            sx={{
              bgcolor: "#F5F4F9",
            }}
          >
            <Carousel
              autoPlay={false}
              animation={"slide"}
              swipe={false}
              navButtonsAlwaysInvisible
            >
              {atheletsData.map((item, i) => (
                <Stack
                  key={i}
                  direction="column"
                  justifyContent="center"
                  spacing={2}
                  pt={2}
                  px={2}
                  sx={{
                    height: "100px",
                  }}
                >
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Stack direction="column" alignItems="center" spacing={0.5}>
                      <Typography variant="body2">{item.id}</Typography>
                      <Box
                        sx={{
                          width: "19px",
                          height: "5px",
                          bgcolor: "#603EBE",
                          borderRadius: "16px",
                        }}
                      ></Box>
                    </Stack>
                    <Typography variant="h4" color="#C2C2C2">
                      {item.name}
                    </Typography>
                  </Stack>
                  <Typography variant="body2">{item.description}</Typography>
                </Stack>
              ))}
            </Carousel>
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={12} sm={8} lg={6}>
            <Stack direction="column" spacing={2} pt={2} pb={5}>
              <Typography variant="h2" color="#E7E7E7">
                ATHLETS
              </Typography>

              <Stack direction="column" spacing={3}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Stack direction="column" alignItems="center" spacing={0.5}>
                    <Typography variant="body2">01</Typography>
                    <Box
                      sx={{
                        width: "19px",
                        height: "5px",
                        bgcolor: "#603EBE",
                        borderRadius: "16px",
                      }}
                    ></Box>
                  </Stack>
                  <Typography variant="h5" color="#C2C2C2">
                    CONNECTION
                  </Typography>
                </Stack>

                <Typography
                  variant="body2"
                  sx={{
                    width: "80%",
                  }}
                >
                  Connect with coaches directly, you can ping coaches to view
                  profile.
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            lg={6}
            sx={{
              bgcolor: "#F5F4F9",
            }}
          ></Grid>

          <Grid
            item
            xs={12}
            sm={8}
            lg={6}
            sx={{
              bgcolor: "#F5F4F9",
            }}
          >
            <Stack
              direction="column"
              justifyContent="center"
              spacing={2}
              py={5}
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                <Stack direction="column" alignItems="center" spacing={0.5}>
                  <Typography variant="body2">02</Typography>
                  <Box
                    sx={{
                      width: "19px",
                      height: "5px",
                      bgcolor: "#603EBE",
                      borderRadius: "16px",
                    }}
                  ></Box>
                </Stack>
                <Typography variant="h5" color="#C2C2C2">
                  COLLABORATION
                </Typography>
              </Stack>

              <Typography
                variant="body2"
                sx={{
                  width: "80%",
                }}
              >
                Work with other student athletes to  increase visability. When
                you share and like other players videos it will increase your
                visability as a player. This is the team work aspect to Surface
                1.
              </Typography>
            </Stack>
          </Grid>

          <Grid
            item
            xs={12}
            sm={4}
            lg={6}
            sx={{
              bgcolor: "#5E3DB3",
            }}
          ></Grid>

          <Grid
            item
            xs={12}
            sm={8}
            lg={6}
            sx={{
              bgcolor: "#5E3DB3",
            }}
          >
            <Stack
              direction="column"
              justifyContent="center"
              spacing={2}
              py={5}
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                <Stack direction="column" alignItems="center" spacing={0.5}>
                  <Typography variant="body2">03</Typography>
                  <Box
                    sx={{
                      width: "19px",
                      height: "5px",
                      bgcolor: "#FFFFFF",
                      borderRadius: "16px",
                    }}
                  ></Box>
                </Stack>
                <Typography variant="h5" color="#C2C2C2">
                  GROWTH
                </Typography>
              </Stack>

              <Typography
                variant="body2"
                color="#FFFFFF"
                sx={{
                  width: "80%",
                }}
              >
                Resources and tools for you to get better as a student Athelte.
                Access to training classes, tutor sessions, etc
              </Typography>
            </Stack>
          </Grid>
        </>
      )}

      {smDown ? (
        <>
          <Grid item xs={12} sm={4} lg={6}>
            <Stack
              sx={{
                position: "relative",
              }}
            >
              <Box
                component="img"
                src={BasketballerImg}
                sx={{
                  width: "300px",
                  position: "absolute",
                  top: "120px",
                  left: 0,
                  right: 0,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack direction="column" spacing={2} pt={2} pb={5}>
              <Typography variant="h2" color="#E7E7E7" pl={2}>
                PLAYERS
              </Typography>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            mt={"200px"}
            pb={5}
            sx={{
              bgcolor: "#F5F4F9",
            }}
          >
            <Carousel
              autoPlay={false}
              animation={"slide"}
              swipe={false}
              navButtonsAlwaysInvisible
            >
              {playerData.map((item, i) => (
                <Stack
                  key={i}
                  direction="column"
                  justifyContent="center"
                  spacing={2}
                  p={2}
                  sx={{
                    height: "100px",
                  }}
                >
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Stack direction="column" alignItems="center" spacing={0.5}>
                      <Typography variant="body2">{item.id}</Typography>
                      <Box
                        sx={{
                          width: "19px",
                          height: "5px",
                          bgcolor: "#603EBE",
                          borderRadius: "16px",
                        }}
                      ></Box>
                    </Stack>
                    <Typography variant="h4" color="#C2C2C2">
                      {item.name}
                    </Typography>
                  </Stack>
                  <Typography variant="body2">{item.description}</Typography>
                </Stack>
              ))}
            </Carousel>
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={12} sm={8} lg={6}>
            <Stack
              direction="column"
              pt={5}
              pb={5}
              sx={{
                ml: { xs: 0, sm: "16px", lg: "30%" },
              }}
            >
              <Stack direction="column" alignItems="flex-start" spacing={2}>
                <Typography variant="h2" color="#E7E7E7" align="center">
                  PLAYERS
                </Typography>
                <Stack direction="column" spacing={3}>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Stack direction="column" alignItems="center" spacing={0.5}>
                      <Typography variant="body2">01</Typography>
                      <Box
                        sx={{
                          width: "19px",
                          height: "5px",
                          bgcolor: "#603EBE",
                          borderRadius: "16px",
                        }}
                      ></Box>
                    </Stack>
                    <Typography variant="h5" color="#C2C2C2">
                      CONNECTION
                    </Typography>
                  </Stack>

                  <Typography
                    variant="body2"
                    sx={{
                      maxWidth: "500px",
                    }}
                  >
                    Connect with talented athlete directly, you can watch their
                    skills through video showreels directly from Surface 1.
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={4} lg={6}>
            <Stack
              sx={{
                position: "relative",
              }}
            >
              <Box
                component="img"
                src={BasketballerImg}
                sx={{
                  width: { xs: "300px", sm: "500px", lg: "600px" },
                  position: "absolute",
                  top: 0,
                  right: { xs: 0, sm: "-160px", lg: "-100px" },
                }}
              />
            </Stack>
          </Grid>

          <Grid
            item
            xs={12}
            sm={8}
            lg={6}
            sx={{
              bgcolor: "#F5F4F9",
            }}
          >
            <Stack
              direction="column"
              spacing={2}
              py={5}
              sx={{
                ml: { xs: 0, sm: "16px", lg: "30%" },
              }}
            >
              <Stack direction="column" spacing={2}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Stack direction="column" alignItems="center" spacing={0.5}>
                    <Typography variant="body2">02</Typography>
                    <Box
                      sx={{
                        width: "19px",
                        height: "5px",
                        bgcolor: "#603EBE",
                        borderRadius: "16px",
                      }}
                    ></Box>
                  </Stack>
                  <Typography variant="h5" color="#C2C2C2">
                    COLLABORATION
                  </Typography>
                </Stack>
                <Typography variant="body2">
                  Work with recruiter to increase your chances of finding
                  talented athlete.
                </Typography>
              </Stack>
            </Stack>
          </Grid>

          <Grid
            item
            xs={12}
            sm={4}
            lg={6}
            sx={{
              bgcolor: "#F5F4F9",
            }}
          ></Grid>

          <Grid
            item
            xs={12}
            sm={8}
            lg={6}
            sx={{
              bgcolor: "#090C35",
            }}
          >
            <Stack
              direction="column"
              spacing={2}
              py={5}
              sx={{
                ml: { xs: 0, sm: "16px", lg: "30%" },
              }}
            >
              <Stack direction="column" spacing={2}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Stack direction="column" alignItems="center" spacing={0.5}>
                    <Typography variant="body2" color="#8F6BE8">
                      03
                    </Typography>
                    <Box
                      sx={{
                        width: "19px",
                        height: "5px",
                        bgcolor: "#FFFFFF",
                        borderRadius: "16px",
                      }}
                    ></Box>
                  </Stack>
                  <Typography variant="h5" color="#C2C2C2">
                    GROWTH
                  </Typography>
                </Stack>

                <Typography variant="body2" color="#FFFFFF">
                  Save your time, recruit proper athlets for your team.
                </Typography>
              </Stack>
            </Stack>
          </Grid>

          <Grid
            item
            xs={12}
            sm={4}
            lg={6}
            sx={{
              bgcolor: "#090C35",
            }}
          ></Grid>
        </>
      )}
    </Grid>
  );
}
