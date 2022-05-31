const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      user: sessionStorage.getItem("activeUser"),
      message: null,
    },
    actions: {
      // Use getActions to call a function within a fuction

      syncTokenFromSession: () => {
        const token = sessionStorage.getItem("token");
        if (token && token != "" && token != undefined)
          setStore({ token: token });
      },

      // logout: () => {
      // 	sessionStorage.clear();
      // 	console.log("logout")
      // 	setStore({ token: null })
      // },

      getUser: async (email) => {
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/user/active",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email }),
            }
          );
          const activeUser = await resp.json();
          setStore({ user: activeUser });
          sessionStorage.setItem("activeUser", activeUser);
        } catch (error) {
          throw Error("error on getuser");
        }
      },

      login: async (email, password) => {
        try {
          const opts = await fetch(process.env.BACKEND_URL + "/api/token", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });

          // const resp = await fetch('https://3001-4geeksacade-reactflaskh-setqz2nrkzy.ws-us45.gitpod.io/api/token')
          if (opts.ok) {
            const data = await opts.json();
            console.log("this came from backend", opts);
            sessionStorage.setItem("token", JSON.stringify(data));
            getActions().getUser(email);
            // setStore({ token: data.access_token })
            return true;
          }
        } catch (error) {
          throw Error("error on login");
        }
      },

      createUser: async (email, password) => {
        try {
          const opts = await fetch(process.env.BACKEND_URL + "/api/user", {
            method: "POST",
            header: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({ email, password }),
          });
          if (opts.ok) {
            const token = await opts.json();
            sessionStorage.setItem("token", json.stringify(token));
            getActions().getActiveUser(email);
            return true;
          } else {
            throw "createuser error";
          }
        } catch (error) {
          throw Error("Encountered Error on createuser");
        }
      },

      getMessage: () => {
        // fetching data from the backend
        fetch(process.env.BACKEND_URL + "/api/hello")
          .then((resp) => resp.json())
          .then((data) => setStore({ message: data.message }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
