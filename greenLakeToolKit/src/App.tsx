import { Box, Button, Grommet, Heading } from "grommet";
import { hpe } from "grommet-theme-hpe";
import { Hpe } from "grommet-icons";
import { LeafletMap } from "./leafletMap";

function App() {
  // const mapBoxRef:React.LegacyRef<HTMLDivElement>=useRef();

  return (
    <Grommet theme={hpe}>
      <Box
        pad={"medium"}
        fill
        height={{ min: "100vh", max: "100vh" }}
        overflow={{ vertical: "auto", horizontal: "hidden" }}
        gap={"medium"}
      >
        <Heading level={1}>
          Optimizing the European Sovereign cloud Costs with common HPE GreenLake PCE
        </Heading>
        <Box width="medium" alignSelf="center">
          <Button
            fill
            size="large"
            primary
            label="HPE GreenLake"
            icon={<Hpe />}
            onClick={() => {
              window.open("https://www.hpe.com/greenlake", "_blank");
            }}
          />
        </Box>


        <Box border height={"50vh"} align="center">
          <LeafletMap />
        </Box>

        <Box width="small" alignSelf="end">
        <Button
            fill
            size="small"
            primary
            label="Github"
            icon={<Hpe />}
            onClick={() => {
              window.open("https://github.com/jear/eu-dps-hpe-gl-pce-map", "_blank");
            }}
          />
        </Box>

      </Box>
    </Grommet>
  );
}

export default App;
