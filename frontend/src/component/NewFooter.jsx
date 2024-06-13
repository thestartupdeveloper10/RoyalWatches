const NewFooter = () => {
    return ( 
        <>
        <div style={{
            position: 'relative',
            bottom: 0,
            width: '100%'
        }}>
          <div style={{
            position: 'absolute',
            width: '100%',
            bottom: 0,
            left: 0
          }}>
               <div style={{
                    display: 'flex',
                    width: '100%',
                    position: 'relative',
                    top: '60px',
                    maxWidth: '1000px',
                    margin: 'auto',
                    background: '#303035',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '20px 15px',
                    borderRadius: '10px'
               }}>
                    <div>
                         <h2 style={{
                            color: '#fff',
                            textTransform: 'uppercase',
                            fontSize: '1rem',
                            opacity: 0.5,
                            letterSpacing: '1px'
                         }}>subscribe to our</h2>
                         <h1 style={{
                            color: '#fff',
                            textTransform: 'uppercase',
                            fontSize: '1.5rem'
                         }}>newsletter</h1>
                    </div>
                    <div style={{ width: '500px' }}>
                         <div style={{
                            background: '#fff',
                            padding: '5px',
                            borderRadius: '20px',
                            display: 'flex',
                            justifyContent: 'space-between'
                         }}>
                              <input type="email" placeholder="enter your email address" style={{
                                border: 'none',
                                outline: 'none',
                                background: 'transparent',
                                width: '80%',
                                paddingLeft: '10px',
                                fontWeight: 600
                              }}/>
                              <button style={{
                                background: '#201e1e',
                                padding: '9px 15px',
                                borderRadius: '15px',
                                color: '#fff',
                                cursor: 'pointer'
                              }}>submit</button>
                         </div>
                    </div>
               </div>
               <div style={{
                    background: '#000',
                    padding: '100px 40px 40px',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap'
               }}>
                    <div style={{
                        margin: '10px 20px',
                        width: '400px'
                    }}>
                         <h2 style={{
                            color: '#fff',
                            fontSize: '1.6rem'
                         }}>code hub</h2>
                         <p style={{
                            color: '#fff',
                            fontSize: '0.8rem',
                            lineHeight: '1.3rem'
                         }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ducimus quo et dignissimos veniam laborum!</p>
                         <div style={{
                            margin: '15px 0',
                            display: 'flex',
                            gap: '8px'
                         }}>
                              <a href="#" style={{
                                width: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textDecoration: 'none',
                                borderRadius: '5px',
                                transition: '.3s',
                                height: '40px',
                                background: '#dbd8e3'
                              }}><i className="fa-brands fa-instagram" style={{
                                fontSize: '1.1rem',
                                color: '#201e1e'
                              }}></i></a>
                              <a href="#" style={{
                                width: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textDecoration: 'none',
                                borderRadius: '5px',
                                transition: '.3s',
                                height: '40px',
                                background: '#dbd8e3'
                              }}><i className="fa-brands fa-twitter" style={{
                                fontSize: '1.1rem',
                                color: '#201e1e'
                              }}></i></a>
                              <a href="#" style={{
                                width: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textDecoration: 'none',
                                borderRadius: '5px',
                                transition: '.3s',
                                height: '40px',
                                background: '#dbd8e3'
                              }}><i className="fa-brands fa-tiktok" style={{
                                fontSize: '1.1rem',
                                color: '#201e1e'
                              }}></i></a>
                              <a href="#" style={{
                                width: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textDecoration: 'none',
                                borderRadius: '5px',
                                transition: '.3s',
                                height: '40px',
                                background: '#dbd8e3'
                              }}><i className="fa-brands fa-facebook-f" style={{
                                fontSize: '1.1rem',
                                color: '#201e1e'
                              }}></i></a>
                         </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '200px',
                        margin: '40px 20px'
                    }}>
                         <p style={{
                            fontSize: '1.3rem',
                            marginBottom: '15px',
                            fontWeight: 600,
                            color: '#fff'
                         }}>information</p>
                         <a href="#" className="link" style={{
                            fontSize: '0.8rem',
                            textDecoration: 'none',
                            marginBottom: '15px',
                            fontWeight: 600,
                            color: '#dbd8e3',
                            transition: '.3s all'
                         }}>our company</a>
                         <a href="#" className="link" style={{
                            fontSize: '0.8rem',
                            textDecoration: 'none',
                            marginBottom: '15px',
                            fontWeight: 600,
                            color: '#dbd8e3',
                            transition: '.3s all'
                         }}>about us</a>
                         <a href="#" className="link" style={{
                            fontSize: '0.8rem',
                            textDecoration: 'none',
                            marginBottom: '15px',
                            fontWeight: 600,
                            color: '#dbd8e3',
                            transition: '.3s all'
                         }}>blog</a>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '200px',
                        margin: '40px 20px'
                    }}>
                         <p style={{
                            fontSize: '1.3rem',
                            marginBottom: '15px',
                            fontWeight: 600,
                            color: '#fff'
                         }}>helpful links</p>
                         <a href="#" className="link" style={{
                            fontSize: '0.8rem',
                            textDecoration: 'none',
                            marginBottom: '15px',
                            fontWeight: 600,
                            color: '#dbd8e3',
                            transition: '.3s all'
                         }}>services</a>
                         <a href="#" className="link" style={{
                            fontSize: '0.8rem',
                            textDecoration: 'none',
                            marginBottom: '15px',
                            fontWeight: 600,
                            color: '#dbd8e3',
                            transition: '.3s all'
                         }}>support</a>
                         <a href="#" className="link" style={{
                            fontSize: '0.8rem',
                            textDecoration: 'none',
                            marginBottom: '15px',
                            fontWeight: 600,
                            color: '#dbd8e3',
                            transition: '.3s all'
                         }}>terms & condition</a>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '200px',
                        margin: '40px 20px'
                    }}>
                         <p style={{
                            fontSize: '1.3rem',
                            marginBottom: '15px',
                            fontWeight: 600,
                            color: '#fff'
                         }}>navigation</p>
                         <a href="#" className="link" style={{
                            fontSize: '0.8rem',
                            textDecoration: 'none',
                            marginBottom: '15px',
                            fontWeight: 600,
                            color: '#dbd8e3',
                            transition: '.3s all'
                         }}>home</a>
                         <a href="#" className="link" style={{
                            fontSize: '0.8rem',
                            textDecoration: 'none',
                            marginBottom: '15px',
                            fontWeight: 600,
                            color: '#dbd8e3',
                            transition: '.3s all'
                         }}>about</a>
                         <a href="#" className="link" style={{
                            fontSize: '0.8rem',
                            textDecoration: 'none',
                            marginBottom: '15px',
                            fontWeight: 600,
                            color: '#dbd8e3',
                            transition: '.3s all'
                         }}>contact</a>
                    </div>
               </div>
          </div>
     </div>
        </>
     );
}
 
export default NewFooter;
