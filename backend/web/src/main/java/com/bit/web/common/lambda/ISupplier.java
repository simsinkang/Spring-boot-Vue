package com.bit.web.common.lambda;

import java.util.function.Supplier;

/**
 * ISupplier
 */
@FunctionalInterface
public interface ISupplier {
    public abstract Object get();
    
}