// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  Code,
  Image,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  serverSideRendering: require("../assets/server-side-rendering.png"),
  clientSideRendering: require("../assets/client-side-rendering.png")
};

preloader(images);

const theme = createTheme({
  primary: "#009682",
  secondary: "#424242",
  tertiary: "#FDFDFD",
  quartenary: "white"
});

theme.screen.components.codePane.pre.fontSize = "1.5rem";
theme.screen.components.image.margin = "1.5rem auto";
theme.screen.components.listItem.fontSize = "3.5rem";
theme.screen.components.listItem.fontWeight = "500";

const AppearListItem = ({children}) => <Appear><ListItem>{children}</ListItem></Appear>;

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500}>
          <Slide bgColor="primary">
            <Heading size={1} fit caps lineHeight={1}>
              Universal JavaScript
            </Heading>
            <Heading size={1} fit textColor="secondary">
              Server-side rendering
            </Heading>
            <Link href="https://github.com/oyvinmar/ssr-presentation">
              <Text textColor="tertiary">View on Github</Text>
            </Link>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1}>
              Rendering
            </Heading>
            <BlockQuote>
              <Quote>Code that generates HTML</Quote>
              <Cite>Me</Cite>
            </BlockQuote>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={4} textColor="primary" textFont="primary">
              Rendering
            </Heading>
            <Text textColor="tertiary">Code that generates HTML</Text>
          </Slide>
          <Slide>
            <Heading size={2} textColor="secondary">
              Server-side rendering
            </Heading>
            <Image width="100%" src={images.serverSideRendering}/>
          </Slide>
          <Slide>
            <Heading size={2} textColor="secondary">
              Client-side rendering
            </Heading>
            <Image width="100%" src={images.clientSideRendering}/>
          </Slide>
          <Slide bgColor="tertiary">
            <Heading size={2} textColor="secondary">
              Example (bfa)
            </Heading>
          </Slide>
          <Slide>
            <Heading size={2} textColor="secondary">
              Main challenges
            </Heading>
              <List textColor="secondary">
                <AppearListItem>Rendering</AppearListItem>
                <AppearListItem>Routing</AppearListItem>
                <AppearListItem>Loading async data</AppearListItem>
              </List>
          </Slide>
          <Slide bgColor="primary">
            <Heading size={6} textColor="secondary" textFont="primary">
              Render to string
            </Heading>
            <Code bgColor="primary" textColor="tertiary">{`renderToString(<App {...renderProps} />)`}</Code>
          </Slide>
          <Slide bgColor="primary">
            <CodePane lang="js" source={require("raw!../assets/routing.example")} margin="20px auto" />
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="primary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="secondary">
              That's all folks
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
