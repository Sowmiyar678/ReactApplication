import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom"
import AddUser from "./Component/System/AddUser";
import NavBar from "./Component/Common/NavBar";
import UserView from "./Component/System/UserView";
import CourseView from "./Component/System/CourseView";
import EnrollmentView from "./Component/System/EnrollmentView";
import AddEnrollment from "./Component/System/AddEnrollment";
import SearchCourse from "./Component/System/SearchCourse";
jest.mock("react-router-dom");

         //Testing AddUser table

test("checking 'username loaded' ",async () => {
  render(<AddUser />);
  await waitFor(()=>{
    const linkElement = screen.getByRole("usrname")
    expect(linkElement).toBeInTheDocument();
  });
});
test("checking 'cityname loaded' ",async () => {
    render(<AddUser />);
    await waitFor(()=>{
      const linkElement = screen.getByRole("cityname")
      expect(linkElement).toBeInTheDocument();
    });
  });
  test("checking 'emailname loaded' ",async () => {
    render(<AddUser />);
    await waitFor(()=>{
      const linkElement = screen.getByRole("emailname")
      expect(linkElement).toBeInTheDocument();
    });
  });
  test("checking 'phonename loaded' ",async () => {
    render(<AddUser />);
    await waitFor(()=>{
      const linkElement = screen.getByRole("phonename")
      expect(linkElement).toBeInTheDocument();
    });
  });
  test("checking 'Add User button loaded' ", () => {
    render(<AddUser />);
      const linkElement = screen.getByTestId("Adduserbtn")
      expect(linkElement).toBeInTheDocument();
    });
    test("checking 'cancel button loaded' ",async () => {
      render(<AddUser />);
      await waitFor(()=>{
        const linkElement = screen.getByTestId("cancelbtn")
        expect(linkElement).toBeInTheDocument();
      });
    });

        //Testing Navbar button 
    
 test("checking 'title button",async ()=>{
    render(<NavBar/>);
const linkElement = screen.getByTestId("titletab");
expect(linkElement).toBeInTheDocument();


})
    
    test("checking 'usertable loaded' ",async () => {
        render(<NavBar />);
        await waitFor(()=>{
          const linkElement = screen.getByTestId("usertab")
          expect(linkElement).toBeInTheDocument();
        });
      });

 
 test("checking 'courseable loaded' ",async () => {
    render(<NavBar />);
    await waitFor(()=>{
      const linkElement = screen.getByTestId("coursetab")
      expect(linkElement).toBeInTheDocument();
    });
  });
 
 test("checking 'enrolltable loaded' ",async () => {
  render(<NavBar />);
  await waitFor(()=>{
    const linkElement = screen.getByTestId("enrolltab")
    expect(linkElement).toBeInTheDocument();
  });
});
        
//testing userview table

test("checking 'userview table loading' ",async () => {
    render(<UserView/>);
    await waitFor(()=>{
      const linkElement = screen.getByTestId("adduser")
      expect(linkElement).toBeInTheDocument();
    });
  });

  test("Testing 'userid  in userview table' ", async () => {
    render(<UserView/>);
    const linkElement = screen.getByRole("userid");
    expect(linkElement).toBeInTheDocument();
  });
  test("Testing 'username  in userview table' ", async () => {
    render(<UserView/>);
    const linkElement = screen.getByRole("username");
    expect(linkElement).toBeInTheDocument();
  });
  test("Testing 'usercity  in userview table' ", async () => {
    render(<UserView/>);
    const linkElement = screen.getByRole("usercity");
    expect(linkElement).toBeInTheDocument();
  });
  test("Testing 'useremail  in userview table' ", async () => {
    render(<UserView/>);
    const linkElement = screen.getByRole("useremail");
    expect(linkElement).toBeInTheDocument();
  });
  test("Testing 'userphoneno  in userview table' ", async () => {
    render(<UserView/>);
    const linkElement = screen.getByRole("userphoneno");
    expect(linkElement).toBeInTheDocument();
  });


  //course view table testing

  test("checking 'courseadd table loading' ",async () => {
    render(<CourseView/>);
    await waitFor(()=>{
      const linkElement = screen.getByTestId("Adduserbtn")
      expect(linkElement).toBeInTheDocument();
    });
  });
  

  test("checking 'view Course loaded' ",async () => {
    render(<CourseView />);
    await waitFor(()=>{
      const linkElement = screen.getByTestId("view")
      expect(linkElement).toBeInTheDocument();
    });
  });


  //Enroll table

  test("checking 'addenrolltable loaded' ",async () => {
    render(<EnrollmentView />);
    await waitFor(()=>{
      const linkElement = screen.getByTestId("addenroll")
      expect(linkElement).toBeInTheDocument();
    });
  });

  test("Testing 'enrollid  in  table' ", async () => {
    render(<EnrollmentView/>);
    const linkElement = screen.getByRole("enrollid");
    expect(linkElement).toBeInTheDocument();
  });
  test("Testing 'enrolldate  in  table' ", async () => {
    render(<EnrollmentView/>);
    const linkElement = screen.getByRole("enrolldate");
    expect(linkElement).toBeInTheDocument();
  });
  test("Testing 'enrolluserid  in  table' ", async () => {
    render(<EnrollmentView/>);
    const linkElement = screen.getByRole("enrolluserid");
    expect(linkElement).toBeInTheDocument();
  });
  test("Testing 'enrollcourseid  in  table' ", async () => {
    render(<EnrollmentView/>);
    const linkElement = screen.getByRole("enrollcourseid");
    expect(linkElement).toBeInTheDocument();
  });

 
  //Add enrollment
 
  test("Testing 'date in enrollment table' ", async () => {
  render(<AddEnrollment/>);
  const linkElement = screen.getByRole("date");
  expect(linkElement).toBeInTheDocument();
});
test("Testing 'userid in enrollment table' ", async () => {
  render(<AddEnrollment/>);
  const linkElement = screen.getByRole("userid");
  expect(linkElement).toBeInTheDocument();
});
test("Testing 'courseid in enrollment table' ", async () => {
  render(<AddEnrollment/>);
  const linkElement = screen.getByRole("courseid");
  expect(linkElement).toBeInTheDocument();
});

test("checking 'Add enroll button loaded' ", () => {
  render(<AddEnrollment />);
    const linkElement = screen.getByTestId("Addenrollbtn")
    expect(linkElement).toBeInTheDocument();
  });

test("checking 'cancel loaded' ",async () => {
  render(<AddEnrollment />);
  await waitFor(()=>{
    const linkElement = screen.getByTestId("cancelenrollbtn")
    expect(linkElement).toBeInTheDocument();
  });
});

   test("Testing 'courseid  in userview table' ", async () => {
    render(<SearchCourse/>);
    const linkElement = screen.getByRole("courseid");
    expect(linkElement).toBeInTheDocument();
  });

  test("Testing 'coursename  in userview table' ", async () => {
    render(<SearchCourse/>);
    const linkElement = screen.getByRole("coursename");
    expect(linkElement).toBeInTheDocument();
  });
  test("Testing 'type  in userview table' ", async () => {
    render(<SearchCourse/>);
    const linkElement = screen.getByRole("type");
    expect(linkElement).toBeInTheDocument();
  });
 

