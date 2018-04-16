import React from 'react'
import ReactDom from 'react-dom'



class Main extends React.Component{

    render(){
        return(
            <Card>
                <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" />
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button href="#">Button</Button>
                </CardBody>
            </Card>

        )
    }

}

ReactDom.render(<Main/>, document.getElementById('articles'))