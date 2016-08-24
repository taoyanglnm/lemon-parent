package org.lnm.test;
import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.shiyao.lemon.core.ConfigProperty;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class) 
@ContextConfiguration(locations={"classpath:spring-mvc.xml","classpath:spring-context.xml"})
public class ConfigPropertyTest {

    @Resource(name = "configProperty")
    private ConfigProperty configProperty;
    
    /**
     * 测试Spring注解获取properties文件的值
     */
    @Test
    public void test() {
        System.out.println(configProperty.getPathFile());
        System.out.println(configProperty.getPathFile());
    }

    
    @Test
    public void test2() {
        System.out.println(configProperty.getPathFile());
        System.out.println(configProperty.getPathFile());
    }
}