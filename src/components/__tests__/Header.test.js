import { fireEvent, render , screen} from "@testing-library/react"
import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../RTStore/appStore";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

it("should load header component with login button", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
          <Header/>
       </Provider>
     </BrowserRouter>
    );

    const loginButton = screen.getByRole("button");

    expect(loginButton).toBeInTheDocument();
 
});

it("should load header component with Cart items 0", () => {
  render(
      <BrowserRouter>
      <Provider store={appStore}>
        <Header/>
     </Provider>
   </BrowserRouter>
  );

  const cartItems = screen.getByText(/0\s*items/i, { exact: false });
  expect(cartItems).toBeInTheDocument();
  
  

});

it("should change login button to logout button on click", () => {
  render(
      <BrowserRouter>
      <Provider store={appStore}>
        <Header/>
     </Provider>
   </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", {name: "Log In"});

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", {name: "Log Out"});

  expect(logoutButton).toBeInTheDocument();

});