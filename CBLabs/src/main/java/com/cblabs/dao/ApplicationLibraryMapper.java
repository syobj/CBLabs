package com.cblabs.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.cblabs.model.ApplicationLibrary;

public interface ApplicationLibraryMapper {

    @Select("SELECT * FROM application_library")
    List<ApplicationLibrary> getAll();

    @Select("SELECT img FROM application_library WHERE id = #{id}")
    byte[] getImg(@Param("id") Long id);

    @Select("SELECT DISTINCT type FROM application_library ORDER BY type")
    List<String> getTypes();

    @Select("SELECT * FROM application_library WHERE type = #{type}")
    List<ApplicationLibrary> getAppLibsByType(@Param("type") String type);
}
