import apisauce from 'apisauce'

const create = (baseURL = 'http://178.128.18.112/temp/api/') => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json'
    },
    timeout: 10000
  });

  const login = (payload) => api.post('login', payload);
  const getVendor = () => api.get('get_vendor');
  const getVendorDetails = (id) => api.get(`get_vendor/${id}`);
  const getKota = () => api.get(`get_kota`);
  const postVendor = (payload) => api.post(`simpan_vendor`, payload);

  return {
    api,
    login,
    getVendor,
    getVendorDetails,
    getKota,
    postVendor
  }
};

export default {
  create
}
