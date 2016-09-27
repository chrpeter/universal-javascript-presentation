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
import CodeSlide from "spectacle-code-slide";

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
              <ListItem>Both</ListItem>
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
              Demo
            </Heading>
          </Slide>
          <Slide>
            <Heading size={1} fit textColor="secondary">
              Why?
            </Heading>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={2} textColor="primary">
              Performance benefits
            </Heading>
            <List textColor="tertiary">
              <AppearListItem>No flash of blank content</AppearListItem>
              <AppearListItem>Fast and light rendering (mobile friendly)</AppearListItem>
              <AppearListItem>Easy caching</AppearListItem>
              <AppearListItem>All the benefits of SPA</AppearListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={2} textColor="secondary">
              SEO
            </Heading>
            <Appear>
              <Heading size={4} textColor="tertiary">
                Pleasing robots and crawlers
              </Heading>
            </Appear>
            <Appear>
              <Image width="50%" src={images.share}/>
            </Appear>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={2} textColor="primary">
              N.B! You need a reason
            </Heading>
            <List textColor="tertiary">
              <AppearListItem>Added complexity</AppearListItem>
              <AppearListItem>More testing needed</AppearListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={1} fit textColor="secondary">
              How?
            </Heading>
          </Slide>
          <Slide>
            <Heading size={1} fit textColor="secondary">
              Why now?
            </Heading>
          </Slide>
          <Slide bgColor="secondary">
            <Text textColor="tertiary">Before rendring was always done in different programming environments, usually in different languages</Text>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={1} textColor="primary" lineHeight={2}>
              Node.js
            </Heading>
            <Appear>
              <Text textColor="tertiary">Run JavaScript everywhere!</Text>
            </Appear>
          </Slide>
          <Slide bgColor="secondary">
            <Text textColor="tertiary">Same code running in different environments</Text>
          </Slide>
          <Slide bgColor="secondary">
            <Text textColor="tertiary">Reuse up to 99% (ish) of your code</Text>
          </Slide>
          <Slide>
            <Heading size={1} fit textColor="secondary">
              Universal JavaScript
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
          <CodeSlide
            lang="js"
            transition={[]}
            code={require("raw!../assets/renderToString.example")}
            ranges={[
              { loc: [0, 200], title: "Render to string" },
              { loc: [1, 2], note: "Import renderToString" },
              { loc: [3, 12], note: "Simple component" },
              { loc: [12, 15], note: "Provide props and render to string" },
              { loc: [16, 17], note: "String output" }
            ]}
          />

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
          <CodeSlide
            lang="js"
            transition={[]}
            code={require("raw!../assets/routing.example")}
            ranges={[
              { loc: [0, 200], title: "Routing flow" },
              { loc: [1, 2], note: "Import react-router dependencies" },
              { loc: [2, 3], note: "Import our shared routes" },
              { loc: [4, 5], note: "Accept any request" },
              { loc: [5, 6], note: "Match route to component and provide callback" },
              { loc: [6, 8], note: "Something went badly wrong, so 500 with a message" },
              { loc: [8, 10], note: "We matched a ReactRouter redirect, so redirect from the server" },
              { loc: [10, 12], note: "If we got props, that means we found a valid component to render for the given route" },
              { loc: [11, 13], note: "Render `index` (template), but pass in the markup we want it to display" },
              { loc: [13, 16], note: "No route match, so 404." }
            ]}
          />
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
