package com.usta.modelotoken.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "factura")

public class FacturaEntity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_factura")
    private long idFactura;

    @Column(name = "total_factura")
    private int totalFactura;

    @Column(name = "fecha")
    private Date fecha;

    @JoinColumn(name = "id_producto", referencedColumnName = "id_producto")
    @ManyToOne(fetch = FetchType.EAGER)
    private ProductoEntity idProductoFK;

    public FacturaEntity(){

    }
    public FacturaEntity(long idFactura, int totalFactura, Date fecha, ProductoEntity idProductoFK) {
        this.idFactura = idFactura;
        this.totalFactura = totalFactura;
        this.fecha = fecha;
        this.idProductoFK = idProductoFK;
    }

    public long getIdFactura() {        return idFactura;    }
    public void setIdFactura(long idFactura) {        this.idFactura = idFactura;    }

    public int getTotalFactura() {        return totalFactura;    }
    public void setTotalFactura(int totalFactura) {        this.totalFactura = totalFactura;    }

    public Date getFecha() {        return fecha;    }
    public void setFecha(Date fecha) {        this.fecha = fecha;    }

    public ProductoEntity getIdProductoFK() {        return idProductoFK;    }
    public void setIdProductoFK(ProductoEntity idProductoFK) {        this.idProductoFK = idProductoFK;    }
}
