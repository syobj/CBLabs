package com.cblabs.config;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Configuration;

import com.cblabs.dao.ApplicationLibraryMapper;

@Configuration
@MapperScan(basePackageClasses = { ApplicationLibraryMapper.class })
public class DataSourceConfig {

}
