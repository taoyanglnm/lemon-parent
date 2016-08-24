package org.lnm.test;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Lo4jTest {
	private static final Logger logger = LoggerFactory.getLogger(Lo4jTest.class);
	
	
	public static void main(String[] args) {
		logger.error("0000");
		logger.warn("1111");
		logger.debug("2222");
		logger.error("333");
		logger.info("4444");
		logger.error("5555");

	}

}
