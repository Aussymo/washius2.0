const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      schedule: sessionStorage.getItem("activeSchedule"),
      user: sessionStorage.getItem("activeUser"),
      message: null,
      allUser: [],
    },

    actions: {
      // Use getActions to call a function within a fuction

      syncTokenFromSession: () => {
        const token = sessionStorage.getItem("token");
        if (token && token != "" && token != undefined)
          setStore({ token: token });
      },

      logout: () => {
        sessionStorage.clear();
        console.log("logout");
        setStore({ token: null });
      },

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

      login: async (email, password, history) => {
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
            history.push("/app");
            // setStore({ token: data.access_token })
            return true;
          } else {
            throw "something went wrong";
          }
        } catch (error) {
          throw Error("error on login");
        }
      },

      createUser: async (email, password, phone_number, full_name, history) => {
        try {
          const opts = await fetch(process.env.BACKEND_URL + "/api/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({ email, password, phone_number, full_name }),
          });
          if (opts.ok) {
            const token = await opts.json();
            sessionStorage.setItem("token", JSON.stringify(token));
            getActions().getUser(email);
            history.push("/");
            return true;
          } else {
            throw "create user error";
          }
        } catch (error) {
          throw Error("Encountered Error on createuser");
        }
      },

      getAllUser: async () => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/api/user");
          const allUser = await resp.json();
          setStore({ allUser });
          console.log(allUser);
        } catch (error) {
          throw Error("error on getuser");
        }
      },

      // schedule: async (
      //   full_name,
      //   sunday_start,
      //   sunday_end,
      //   monday_start,
      //   monday_end,
      //   tuesday_start,
      //   tuesday_end,
      //   wednesday_start,
      //   wednesday_end,
      //   thursday_start,
      //   thursday_end,
      //   friday_start,
      //   friday_end,
      //   saturday_start,
      //   saturday_end,
      //   history
      // ) => {
      //   try {
      //     const opts = await fetch(process.env.BACKEND_URL + "/api/scheduler", {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //         "Access-Control-Allow-Origin": "http://localhost:3000",
      //       },
      //       body: JSON.stringify({
      //         full_name: full_name,
      //         sunday_start: sunday_start,
      //         sunday_end: sunday_end,
      //         monday_start: monday_start,
      //         monday_end: monday_end,
      //         tuesday_start: tuesday_start,
      //         tuesday_end: tuesday_end,
      //         wednesday_start: wednesday_start,
      //         wednesday_end: wednesday_end,
      //         thursday_start: thursday_start,
      //         thursday_end: thursday_end,
      //         friday_start: friday_start,
      //         friday_end: friday_end,
      //         saturday_start: saturday_start,
      //         saturday_end: saturday_end,
      //       }),
      //     });
      //     if (opts.ok) {
      //       getActions().getScheduler(full_name);
      //       history.push("/scheduler");
      //       return true;
      //     } else {
      //       throw "create schedule error";
      //     }
      //   } catch (error) {
      //     throw Error("Encountered Error on creat schedule");
      //   }
      // },

      // getSchedule: async (full_name) => {
      //   try {
      //     const resp = await fetch(
      //       process.env.BACKEND_URL + "/api/scheduler/active",
      //       {
      //         method: "POST",
      //         headers: {
      //           "Content-Type": "application/json",
      //         },
      //         body: JSON.stringify({ full_name }),
      //       }
      //     );
      //     const activeSchedule = await resp.json();
      //     setStore({ schedule: activeSchedule });
      //     sessionStorage.setItem("activeSchedule", activeSchedule);
      //   } catch (error) {
      //     throw Error("error on getSchedule");
      //   }
      // },

      //  Weather = {
      //   apiKey: "31485c2481a8c37efbb0227f3a40ff2e",
      //   fetchWeather: function (city) {
      //     fetch(
      //       "https://api.openweathermap.org/data/2.5/weather?q=" +
      //         city +
      //         "&units=imperial&appid=" +
      //         this.apiKey
      //     )
      //       .then((response) => {
      //         if (!response.ok) {
      //           alert("No weather found.");
      //           throw new Error("No weather found.");
      //         }
      //         return response.json();
      //       })
      //       .then((data) => this.displayWeather(data));
      //   },

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
