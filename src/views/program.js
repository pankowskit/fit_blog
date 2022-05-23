import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import ProgramS1 from "../components/program-s1";
import ProgramS2 from "../components/program-s2";
import ProgramS3 from "../components/program-s3";

class Program extends Component{
    render(){
        return(        
            <Container fluid className="minh-100vh p-0">
                <ProgramS1/>
                <ProgramS2/>
                <ProgramS3/>
            </Container>    
        );
    }
}

export default Program;