import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import PackagesS1 from "../components/packages-s1";
import PackagesS2 from "../components/packages-s2";
import PackagesS3 from "../components/packages-s3";
import PackagesS4 from "../components/packages-s4";


class Package extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <PackagesS1/>
                <PackagesS2/>
                <PackagesS3/>
                <PackagesS4/>
            </Container>    
        );
    }
}

export default Package;