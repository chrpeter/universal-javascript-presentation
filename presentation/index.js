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
  clientSideRendering: require("../assets/client-side-rendering.png"),
  share: require("../assets/share.png")
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
            <Heading size={2} textColor="secondary">
              Server-side rendering
            </Heading>
            <Link href="https://github.com/oyvinmar/ssr-presentation">
              <Text textColor="tertiary">View on Github</Text>
            </Link>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={1} textColor="primary" lineHeight={1}>
              Universal JavaScript
            </Heading>
            <List textColor="tertiary">
              <ListItem>What is it?</ListItem>
              <ListItem>Why use it?</ListItem>
              <ListItem>How to implement it (with React)</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={1} fit textColor="secondary">
              Background
            </Heading>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={2} textColor="primary" textFont="primary" lineHeight={2}>
              Rendering
            </Heading>
            <Text textColor="tertiary">Code that generates HTML for the browser</Text>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={1} textColor="primary" lineHeight={1}>
              Rendering
            </Heading>
            <List textColor="tertiary">
              <ListItem>Server-side</ListItem>
              <ListItem>Client-side</ListItem>
            </List>
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
          <Slide>
            <Heading size={2} textColor="secondary">
              Universal rendering
            </Heading>
            <Image width="100%" src={images.clientSideRendering}/>
          </Slide>
          <Slide>
            <Heading size={1} fit textColor="secondary">
              Why?
            </Heading>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={2} textColor="primary">
              Previous blocks
            </Heading>
            <Text textColor="tertiary">Rendring done in different programming environments, usually in different languages</Text>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={1} textColor="primary">
              Node.js
            </Heading>
            <Appear>
              <Text textColor="tertiary">Same programming environment and language </Text>
            </Appear>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={2} textColor="primary">
              Performance benefits
            </Heading>
            <List textColor="tertiary">
              <AppearListItem>No flash of blank content</AppearListItem>
              <AppearListItem>Fast and light rendering (ref mobile)</AppearListItem>
              <AppearListItem>Easy caching</AppearListItem>
              <AppearListItem>All the benefits of SPA</AppearListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={2} textColor="secondary">
              Please robots/cravlers
            </Heading>
            <Appear>
              <Image width="50%" src={images.share}/>
            </Appear>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={2} textColor="primary">
              Problems
            </Heading>
            <List textColor="tertiary">
              <AppearListItem>Overhead</AppearListItem>
              <AppearListItem>Do you need it?</AppearListItem>
            </List>
          </Slide>

          <Slide>
            <Heading size={1} fit textColor="secondary">
              How
            </Heading>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={2} textColor="primary">
              Main challenges
            </Heading>
            <List textColor="tertiary">
              <AppearListItem>Rendering</AppearListItem>
              <AppearListItem>Routing</AppearListItem>
              <AppearListItem>Loading async data</AppearListItem>
            </List>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={2} textColor="primary">
              Rendering
            </Heading>
            <Text textColor="tertiary">Easy (if you use React)</Text>
          </Slide>
          <Slide>
            <Heading size={4} textColor="secondary">
              ReactDOMServer.renderToString
            </Heading>
            <Code size={3}>string renderToString(ReactElement element)</Code>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <BlockQuote>
              <Quote>Render a ReactElement to its initial HTML.</Quote>
              <Cite>React docs</Cite>
            </BlockQuote>
          </Slide>
          <Slide bgColor="primary">
            <Heading size={6} textColor="secondary" textFont="primary">
              Render to string
            </Heading>
            <CodePane lang="js" source={require("raw!../assets/renderToString.example")} margin="20px auto" />
          </Slide>

          <Slide>
            <Heading size={2} textColor="secondary">
              Routing
            </Heading>
            <List textColor="secondary">
              <AppearListItem>react-router</AppearListItem>
            </List>
          </Slide>
          <Slide>
            <CodePane lang="js" source={require("raw!../assets/routing.example")} margin="20px auto" />
          </Slide>
          <Slide transition={["spin", "slide"]}>
            <Heading size={1} caps fit lineHeight={1.5} textColor="secondary">
              That's all folks
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
