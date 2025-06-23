here the  req.params is use to get the parameter or id in URL

eg :  www.blablabla/products/all/ecom/Iphone/15

if I want to grab this 15 my backend url should be like this 

eg :  www.blablabla/products/all/ecom/Iphone/:id

!Important : use : before you specify dynamic route so that you can retrive the data 

make sure to use the  proper word related to the data which its going to  store  its not mandatory though just for our understanding 

To Access it you just need to do this --> 
                                         const myID = req.params.id -- > myID = 15 

this simple it is 



code : 

    import express from "express";

    const app = express();
    const PORT = 8000;

    app.get("/mahi/data/:dataID", (req, res) => {
    const dataId = req.params.dataID;

    if (dataId) {
        res.send("We have successfully fetched the DataId " + dataId);
    } else {
        res.status(400).send("Facing problem while fetching DataID ");
    }
    });

    app.listen(PORT, () => {
    console.log("Server is up for the parameters ");
    });




output : We have successfully fetched the DataId 10