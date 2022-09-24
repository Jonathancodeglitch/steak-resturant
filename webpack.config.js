const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
mode:"development",

entry:{
    app:"./src/app.js"
},

output:{
   filename:'[contenthash].js',
   path:path.resolve(__dirname, 'dist'),  
   clean:true,
   assetModuleFilename:'[name][ext]',
},

module:{
    rules:[
    {test: /\.css$/i,use: ['style-loader', 'css-loader']},
    {test: /\.(png|svg|jpg|jpeg|gif)$/i,type: 'asset/resource'},
  ]
    
  },

  plugins:[
    new HtmlWebpackPlugin({
      title: 'steak house',
      filename:'index.html',
      template:'./src/templete.html'
    })
  ],

devtool:'source-map',

devServer:{
  static:{
    directory:path.resolve(__dirname,'dist'),
    
  },

  port:3000,
  hot:true,
  open:true,
  compress:true,
  historyApiFallback:true
},

}