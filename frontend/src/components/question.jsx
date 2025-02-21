import Editor from "./editor.jsx";
import Content from "./content.jsx";
import Bot from "./bot.jsx";
import html from "../lessons/html.js";
import { useExpLevel } from "../context/exp.jsx";
import { useNavigate } from "react-router-dom";

export default function (props) {
    console.log(props);
    const { exp, level, addExp } = useExpLevel();
    const navigate = useNavigate();

    return (
        <div className="question-div flexbox">
            <div>
                <Content {...props} />
                <div className="flexbox">
                    <span className="button" onClick={() => {
                        const currentPath = window.location.pathname;
                        const pathParts = currentPath.split("/");
                        const lastPart = parseInt(pathParts[pathParts.length - 1], 10);
                        
                        if (!isNaN(lastPart) && lastPart - 1 >= 0) {
                            pathParts[pathParts.length - 1] = lastPart - 1;
                            navigate(pathParts.join("/"));
                        }
                    }}>Prev</span>
                    <Bot />
                    <span className="button" onClick={() => {
                        const currentPath = window.location.pathname;
                        const pathParts = currentPath.split("/");
                        const lastPart = parseInt(pathParts[pathParts.length - 1], 10);
                        
                        if (!isNaN(lastPart) && lastPart + 1 < html.length) {
                            pathParts[pathParts.length - 1] = lastPart + 1;
                            navigate(pathParts.join("/"));
                            addExp(50);
                        }
                    }}>Next</span>
                </div>
            </div>
            <Editor />
        </div>
    );
}
