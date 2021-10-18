import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Post from "./components/Post";
import View from "./pages/View";
import axios from "axios";
import Settings from "./pages/Settings";
import Edit from "./components/Edit";
import EditCat from "./components/EditCat";
import useAuth from "./components/Auth/useAuth";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import JobsTypes from "./pages/JobsTypes";

const App = () => {
  const [allValue, setallValue] = useState([{}]);
  const [categories, setCategories] = useState([{}]);
  const [userData, setUserData] = useState([{}]);
  const [search, setSearch] = useState([{}]);
  const [minLimit, setminLimit] = useState(2);

  const { user, login, logout, islogged } = useAuth();

  let history = useHistory()

  //#region request methods
  const getJobs = () => {
    axios("http://ec2-18-216-92-225.us-east-2.compute.amazonaws.com/api/jobs")
      .then((result) => {
        result.data.map((value) => {
          setallValue((x) => [
            ...x,
            {
              id: value.id,
              category_id: value.category_id,
              user_id: value.user_id,
              job_type_id: value.job_type_id,
              company_name: value.company_name,
              logo_url: value.logo_url,
              job_url: value.job_url,
              position: value.position,
              location: value.location,
              description: value.description,
              how_to_applay: value.how_to_applay,
              email: value.email,
            },
          ]);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCategories = () => {
    axios(
      "http://ec2-18-216-92-225.us-east-2.compute.amazonaws.com/api/categories"
    )
      .then((result) => {
        result.data.map((value) => {
          setCategories((x) => [
            ...x,
            {
              id: value.id,
              name: value.name,
            },
          ]);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUser = () => {
    axios
      .get("http://ec2-18-216-92-225.us-east-2.compute.amazonaws.com/api/users")
      .then((result) => {
        result.data.map((value) => {
          setUserData((x) => [
            ...x,
            {
              id: value.id,
              email: value.email,
              username: value.username,
              user_type_id: value.user_type_id,
              first_name: value.first_name,
              last_name: value.last_name,
            },
          ]);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getSearchJobs = (e) => {
    e.preventDefault();

    const { name } = e.target;

    allValue
      .filter(
        (filt) =>
          filt.company_name === name.value ||
          filt.position === name.value ||
          filt.location === name.value ||
          filt.description === name.value
      )
      .map((value) => {
        setSearch((x) => [
          ...x,
          {
            id: value.id,
            category_id: value.category_id,
            user_id: value.user_id,
            job_type_id: value.job_type_id,
            company_name: value.company_name,
            logo_url: value.logo_url,
            job_url: value.job_url,
            position: value.position,
            location: value.location,
            description: value.description,
            how_to_applay: value.how_to_applay,
            email: value.email,
          },
        ]);
      });
  };

  const verify = (e) => {
    e.preventDefault();

    const { email } = e.target;

    userData
      .filter((filt) => filt.email == email.value)
      .map((value) => {
        login(value);
      });
  };

  const postData = (e) => {
    e.preventDefault();
    const {
      select,
      radioValue,
      company,
      Logo,
      URL,
      Position,
      Location,
      Email,
      Hta,
      Description,
    } = e.target;

    let data = {
      company_name: company.value,
      category_id: select.value,
      logo_url: Logo.value,
      job_url: URL.value,
      position: Position.value,
      location: Location.value,
      description: Description.value,
      job_type_id: radioValue.value,
      user_id: 2,
      email: Email.value,
      how_to_applay: Hta.value,
    };

    axios({
      method: "post",
      url: "http://ec2-18-216-92-225.us-east-2.compute.amazonaws.com/api/jobs",
      data: data,
    })
      .then((result) => {
        console.log(result.data);
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log(data);
  };

  const postCategories = (e) => {
    e.preventDefault();
    const { addCategories } = e.target;
    axios
      .post(
        "http://ec2-18-216-92-225.us-east-2.compute.amazonaws.com/api/categories",
        { name: addCategories.value }
      )
      .then((result) => {
        window.location.replace("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postUser = (e) => {
    e.preventDefault();

    const { first_name, last_name, email, username, password } = e.target;

    axios
      .post(
        "http://ec2-18-216-92-225.us-east-2.compute.amazonaws.com/api/users",
        {
          first_name: first_name.value,
          last_name: last_name.value,
          username: username.value,
          email: email.value,
          password: password.value,
          user_type_id: 1,
        }
      )
      .then((result) => {
        window.location.replace("/login");
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const putJobs = (e, id) => {
    e.preventDefault();

    const {
      select,
      radioValue,
      company,
      Logo,
      URL,
      Position,
      Location,
      Email,
      Hta,
      Description,
    } = e.target;

    let data = {
      company_name: company.value,
      category_id: select.value,
      logo_url: Logo.value,
      job_url: URL.value,
      position: Position.value,
      location: Location.value,
      description: Description.value,
      job_type_id: radioValue.value,
      user_id: 2,
      email: Email.value,
      how_to_applay: Hta.value,
    };

    axios
      .put(
        `http://ec2-18-216-92-225.us-east-2.compute.amazonaws.com/api/jobs?id=${id}`,
        data
      )
      .then((result) => {
        window.location.replace("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const putCategories = (e, id) => {
    e.preventDefault();
    const { EditCategories } = e.target;
    let data = {
      name: EditCategories.value,
    };
    axios
      .put(
        `http://ec2-18-216-92-225.us-east-2.compute.amazonaws.com/api/categories?id=${id}`,
        data
      )
      .then((result) => {
        window.location.replace("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteJobs = (id, data) => {
    const validate = window.confirm(
      "Are you sure you want to delete this job?"
    );
    if (validate) {
      axios({
        method: "DELETE",
        url: `http://ec2-18-216-92-225.us-east-2.compute.amazonaws.com/api/jobs?id=${id}`,
        data: data,
      })
        .then((result) => {
          window.location.replace("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const deleteCategories = (id, data) => {
    const validate = window.confirm(
      "Are you sure you want to delete this job?"
    );
    if (validate) {
      axios({
        method: "DELETE",
        url: `http://ec2-18-216-92-225.us-east-2.compute.amazonaws.com/api/categories?id=${id}`,
        data: data,
      })
        .then((result) => {
          window.location.replace("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  //#endregion

  useEffect(() => {
    getJobs();
    getCategories();
    getUser();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home
            minLimit={minLimit}
            allValue={allValue}
            categories={categories}
            userData={userData}
            search={search}
            getSearchJobs={getSearchJobs}
          />
        </Route>
        <Route path="/login">
          <Login verify={verify} />
        </Route>
        <Route path="/signup">
          <Signup postUser={postUser} />
        </Route>
        <Route path="/post">
          <Post postData={postData} categories={categories} />
        </Route>
        <Route path="/edit/:id">
          <Edit allValue={allValue} categories={categories} putJobs={putJobs} />
        </Route>
        <Route path="/settings/edit/:id">
          <EditCat
            allValue={allValue}
            categories={categories}
            putCategories={putCategories}
          />
        </Route>
        <Route path="/view/:id">
          <View
            allValue={allValue}
            categories={categories}
            deleteJobs={deleteJobs}
          />
        </Route>
        <Route path="/settings">
          <Settings
            categories={categories}
            postCategories={postCategories}
            deleteCategories={deleteCategories}
          />
        </Route>
        <Route path="/jobs/:name">
          <JobsTypes allValue={allValue} categories={categories} />
        </Route>
        <Route path="/*">
          <Error404 />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
