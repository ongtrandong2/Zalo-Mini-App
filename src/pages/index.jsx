import React, { useState, useEffect } from 'react';
import { useNavigate } from 'zmp-ui';
import getPermission from '../Apis/getauthen';

const HomePage = () => {
  const navigate = useNavigate();
  const handlePermission = () => {
    getPermission().then(() => navigate("/home"));
  };
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card text-center p-4 shadow-sm" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="d-flex align-items-center">
            <img
              src="https://via.placeholder.com/60x60"
              alt="Demo Mini App"
              className="rounded-circle"
              style={{ width: '60px', height: '60px' }}
            />
            <div className="ms-3 text-start">
              <h6 className="mb-0">Demo with dotNet</h6>
              <small>Welcome, Nhà Tuyển Dụng!</small>
            </div>
          </div>
          <div>
            <button className="btn btn-sm btn-light">x</button>
          </div>
        </div>

        <img
          src="https://via.placeholder.com/200x100"
          alt="Illustration"
          className="img-fluid mb-3"
          style={{ width: '350px' }}
        />

        {/* Welcome text */}
        <h5 className="mb-3">Đây là ứng dụng Demo Mini App của ứng viên Trần Đông Đông!</h5>

        {/* Features list */}
        <ul className="list-unstyled text-start mb-4">
          <li className="mb-2">
            <i className="bi bi-search"></i> 1. Lấy thông tin người dùng đổ vào cơ sở dữ liệu PostgreSQL bằng API Xây dụng bằng .Net
          </li>
          <li className="mb-2">
            <i className="bi bi-bell"></i> 2. Show ra danh sách sản phẩm có sẳn
          </li>
          <li className="mb-2">
            <i className="bi bi-truck"></i> 3. Nếu người dùng đã liên kết rồi, không hiển thị màn hình này nữa
          </li>
        </ul>

        {/* Description */}
        <p className="mb-4">Vui lòng đồng ý chia sẻ số điện thoại để liên kết với tài khoản của bạn trên hệ thống Demo with dotNet</p>

        {/* Buttons */}
        <button className="btn btn-primary btn-block mb-3" onClick={handlePermission}>Liên kết số điện thoại</button>
        <button className="btn btn-link text-danger" onClick={() => navigate(-1)}>Từ chối và Thoát</button>
      </div>
    </div>
  );
};

export default HomePage;
