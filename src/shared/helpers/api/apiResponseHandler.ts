const apiResponseHandler = <T>(responseData: T) => {
  return new Response(JSON.stringify(responseData));
};

export default apiResponseHandler;
