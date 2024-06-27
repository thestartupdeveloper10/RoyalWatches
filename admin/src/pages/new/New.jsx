import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const New = ({title }) => {

  const [inputs, setInputs] = useState({});
  const [cat, setCat] = useState([]);
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);


  const [file, setFile] = useState("");

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  console.log(inputs)

  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };

  const handleSize = (e) => {
    setSize(e.target.value.split(","));
  };

  const handleColor = (e) => {
    setColor(e.target.value.split(","));
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

                <div className="formInput">
                  <label>Title</label>
                  <input name="title" type='text' placeholder="title" onChange={handleChange} />
                </div>
        <div className="formInput">
          <label>Description</label>
          <input
            name="desc"
            type="text"
            placeholder="description..."
            onChange={handleChange}
          />
        </div>
        <div className="formInput">
              <label>Price</label>
              <input
                name="price"
                type="number"
                placeholder="100"
                min="0"
                step="100"
                required
                onChange={handleChange}
              />
        </div>

        <div className="formInput">
          <label>Categories</label>
          <input type="text" name="categories" placeholder="Men,Women" onChange={handleCat} />
        </div>
        <div className="formInput">
          <label>Size</label>
          <input type="text" name="size" placeholder="S,M,L,XL" onChange={handleSize} />
        </div>
        <div className="formInput">
          <label>Color</label>
          <input type="text" name="color" placeholder="black,blue,red,gold" onChange={handleColor}/>
        </div>
        <div className="formInput">
          <label>Stock</label>
          <select name="inStock" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
          
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
