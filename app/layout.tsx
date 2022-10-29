const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <head>
        <title>Home</title>
      </head>
      <body>
        <div
          id="layout"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
