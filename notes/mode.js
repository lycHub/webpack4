development = {
  /*
  * Sets process.env.NODE_ENV on DefinePlugin to value development .
  * Enables NamedChunksPlugin and NamedModulesPlugin .
  *
  * */
}


production = {
  /*
   *Sets process.env.NODE_ENV on DefinePlugin to value production . Enables FlagDependencyUsagePlugin , FlagIncludedChunksPlugin , ModuleConcatenationPlugin , NoEmitOnErrorsPlugin , OccurrenceOrderPlugin , SideEffectsFlagPlugin and TerserPlugin .
   *
   * */
}

// https://webpack.js.org/configuration/mode/