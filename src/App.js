import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Route,
  Switch,
  useHistory,
  useLocation,
  Redirect,
} from "react-router-dom";

import { AddList } from "./components/AddList";
import { TodoList } from "./components/TodoList";
import { Tasks } from "./components/Tasks";
import { TaskList } from "./components/TaskList";

import { TodoListLoader } from "./components/Loader/todoListLoader";
import { TaskLoader } from "./components/Loader/taskListLoader";

import { onLoadLists } from "./actions/todoListsActions";
import { onLoadTask } from "./actions/taskListActions";
import { SideBar, Wrapper, Container } from "./Styles";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [activeRoute, setActiveRoute] = useState(null);

  const todoLists = useSelector((store) => store.todoList);
  const dispatch = useDispatch();

  let history = useHistory();
  let location = useLocation();

  useEffect(() => {
    dispatch(onLoadLists());
    setIsLoading(true);
  }, []);

  useEffect(() => {
    dispatch(onLoadTask());
    setIsLoading(true);
  }, []);

  useEffect(() => {
    const currentListId = location.pathname.split("/")[2];
    if (todoLists) {
      const currentTodoList = todoLists.find(
        (item) => item.id === Number(currentListId)
      );
      setActiveRoute(currentTodoList);
    }
  }, [location.pathname, todoLists]);

  const onClickList = (listId) => {
    history.push(`/lists/${listId}`);
  };

  return (
    <Wrapper>
      <GlobalStyle />
      <Container>
        <SideBar>
          {!isLoading ? (
            <TodoListLoader />
          ) : (
            todoLists.length > 0 && (
              <>
                <TodoList
                  onClickList={() => history.push("/lists")}
                  title="Все задачи"
                />

                {todoLists &&
                  todoLists.map((todoList) => {
                    return (
                      <TodoList
                        history={history}
                        onClickList={onClickList}
                        key={todoList.id}
                        icon={todoList.color}
                        title={todoList.name}
                        id={todoList.id}
                      />
                    );
                  })}

                <AddList />
              </>
            )
          )}
        </SideBar>
        <Tasks>
          {isLoading ? (
            <Switch>
              <Route exact path="/lists/:id">
                {activeRoute && <TaskList todoList={activeRoute} />}
              </Route>
              <Route exact path="/lists">
                {todoLists &&
                  todoLists.map((todoList) => {
                    return <TaskList key={todoList.id} todoList={todoList} />;
                  })}
              </Route>
              <Route path="*">
                <Redirect to="/lists" />
              </Route>
            </Switch>
          ) : (
            <TaskLoader />
          )}
        </Tasks>
      </Container>
    </Wrapper>
  );
}

export default App;
