import Nav from "./auth/Nav";
import "./globals.css";
import Provider from "./Provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className=" mx-2 lg:mx-44 md:mx-32  lg:my-6 md:my-5 my-3 font-golos-text">
        <Provider>
          <Nav/>
          {children}
        </Provider>
      </body>
    </html>
  );
}
