import Delete from './Delete';
import Get from './Get';
import Post from './Post';
import Put from './Put';

//POST
const postData = (data) => Post('posts', true, data);

//PUT
const updateData = (data, id) => Put('posts/'+ id, true, data);

// GET
const getData = () => Get('posts?_sort=id&_order=desc', true);

// DELETE
const deleteData = (id) => Delete('posts/'+ id, true);

const API = {
    postData,
    updateData,
    getData,
    deleteData
}

export default API;

